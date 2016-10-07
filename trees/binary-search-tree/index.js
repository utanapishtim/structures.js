var assert = require('assert')

const NIL = Symbol(null)

function Node(key, left, right, parent, metadata) {
  assert(typeof key === 'number', 'node key must be a number')
  this.key = key
  this.left = left || NIL
  this.right = right || NIL
  this.parent = parent || NIL
  if (metadata) this.metadata = metadata
}


const walk = (node, fn) => {
  if (node !== NIL) {
    walk(node.left, fn)
    fn(node)
    walk(node.right, fn)
  }
}

const searchR = (node, value) => {
  if (node === NIL || value === node.key) return node
  return (value < node.key)
    ? searchR(node.left, value)
    : searchR(node.right, value)
}

const searchI = (node, value) => {
  let current = node
  while (current !== NIL && value !== current.key) {
    current = (value < current.key) ? current.left : current.right
  }
  return current
}

function BST(root) {
  this.root = root || NIL

  const transplant = (n1, n2) => {
    if (n1.parent === NIL) {
      this.root = n2
    } else if (n1 == n1.parent.left) {
      n1.parent.left = n2
    } else {
      node.parent.right = n2
    }
    if (n2 !== NIL) n2.parent = n1.parent
  }

  this.searchR = (...args) => (args.length === 1)
    ? searchR(this.root, args[0])
    : searchR(...args)
  this.searchI = (...args) => (args.length === 1)
    ? searchI(this.root, args[0])
    : searchI(...args)
  this.walk = (...args) => (args.length === 1)
    ? walk(this.root, args[0])
    : walk(...args)
  this.min = (node) => {
    if (node === NIL) return node
    let current = node
    while (current.left !== NIL) {
      current = current.left
    }
    return current
  }
  this.max = (node) => {
    if (node === NIL) return node
    let curent = node
    while (current.right !== NIL) {
      current = current.right
    }
    return current
  }
  this.succ = (node) => {
    if (node === NIL) return node
    if (node.right !== NIL) return this.min(node.right)
    let current = node
    let parent = node.parent
    while (current !== NIL && current === parent.right) {
      current = parent
      parent = parent.parent
    }
    return parent
  }
  this.pred = (node) => {
    if (node === NIL) return node
    if (node.left !== NIL) return this.min(node.left)
    let current = node
    let parent = node.parent
    while (current !== NIL && current === parent.left) {
      current = parent
      parent = parent.parent
    }
    return parent
  }
  this.insert = (node) => {
    let prev = NIL
    let current = this.root
    while (current !== NIL) {
      prev = current
      current = (node.key < current.key)
        ? current.left
        : current.right
      node.parent = prev
    }
    if (prev === NIL) {
      this.root = node
    } else if (node.key < prev.key) {
      prev.left = node
    } else {
      prev.right = node
    }
  }
  this.delete = (node) => {
    // no left child
    if (node.left === NIL) {
      transplant(node, node.right)
    // left child & no right child
    } else if (node.right === NIL) {
      transplant(node, node.left)
    } else {
      let current = this.min(node.right)
      // current not z's left child
      if (current.parent !== node) {
        transplant(current, current.right)
        current.right = node.right
        current.right.parent = current
      }
      // current is z's right child
      transplant(node, current)
      current.left = node.left
      current.left.parent = current
    }
  }
}


BST.NIL = NIL
BST.Node = Node
module.exports = BST
