module.exports = {
  one : function(thing) {
    if (typeof thing === 'undefined') {
      thing = 0;
    }
    return thing += 1;
  }
}
