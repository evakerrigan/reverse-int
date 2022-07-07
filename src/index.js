module.exports = function reverse (n) {
  const abs = Math.abs(n).toString();
  //return abs.split('').reverse().join('');
  return Array.from(abs).reverse().join('');
}
