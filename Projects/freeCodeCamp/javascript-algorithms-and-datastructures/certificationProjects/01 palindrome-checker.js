function palindrome(str) {
  const regEx = /[_\W]+/g
  let alphaNumeric = str.replaceAll(regEx,'').toLowerCase()
  let reversed = alphaNumeric.split('').reverse().join('')
  return alphaNumeric === reversed ? true: false
}



palindrome("eye");