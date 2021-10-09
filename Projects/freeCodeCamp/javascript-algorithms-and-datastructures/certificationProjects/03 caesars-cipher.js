function rot13(str) {
  let min = 65
  let max = 90
  let diff = 26
  let arr = str.split('')
  let decipher = arr.map((current) => {
    let letterCode = current.charCodeAt(0)
    if(letterCode <= max && letterCode >= min){
      let cipher = letterCode + 13
      if(cipher <= max){
        return String.fromCharCode(cipher)
      }else{
        return String.fromCharCode(cipher - diff)
      }
    }else {
      return current
    }
  })
  let result = decipher.join('')
  console.log(result)
  return result;
}

rot13("SERR PBQR PNZC");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
rot13("SERR CVMMN!")