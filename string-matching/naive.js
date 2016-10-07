const naive = (source, string) => {
  for (let s = 0; s < (source.length - string.length); s++) {
    let match = s
    for (j = 0; j < string.length; j++) {
      if (source[s + j] !== string[j]) {
        match = -1
        break
      }
    }
    if (match > -1) return s
  }
  return -1
}

module.exports = naive
