const isEmpty = (obj: Object) => {
  if (Object.keys(obj).length === 0 && obj.constructor === Object) {
    return true
  }
  return false
}

module.exports = isEmpty
