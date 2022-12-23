function fixLetter(letter) {
  return letter
    .replace(/(^\s+)|(\s+$)/g, "")
    .replace(/([.,?!\s])(?=\1)/g, "")
    .replace(/(\s+([.,?!]))/g, "$2")
    .replace(/([!?.,])\s*([A-z])/g, "$1 $2")
    .replace(/(^|[.!?]\s+)([a-z])/g, (m, $1, $2) => $1 + $2.toUpperCase())
    .replace(/(^[a-z])/g, (m, $1) => $1.toUpperCase())
    .replace(/(santa claus)/gi, "Santa Claus")
    .replace(/([A-z])$/, "$1.");
}
