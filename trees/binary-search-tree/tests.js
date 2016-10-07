const BST = require('./index')
const NIL = BST.NIL
var tree = new BST()
var assert = require('assert')

function* random(seed) {
  assert(typeof seed === 'number')
  while(true) {
    yield Math.floor(Math.random() * seed)
  }
}

function* take(n, stream) {
  assert(typeof n === 'number')
  while(n--) {
    yield stream.next().value
  }
}

function* xform(stream, fn) {
   while(true) {
      yield fn(stream.next().value)
   }
}

let satisfies = (predicate, value) => predicate(value)

let bstProperty = (node) => (node.left === NIL || node.left.key <= node.key) && (node.right === NIL || node.right.key >= node.key)


let isBST = (tree) => {
  var res = []
  tree.walk((node) => {
     res.push(satisfies(bstProperty, node))
  })
  return res.every((x) => x)
} 

for(let node of take(1000000, xform(random(1000000), (number) => new BST.Node(number)))) {
   tree.insert(node)
}

console.log(isBST(tree))

