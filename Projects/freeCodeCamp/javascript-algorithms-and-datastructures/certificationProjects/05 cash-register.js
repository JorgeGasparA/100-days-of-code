function checkCashRegister(price, cash, cid) {  
  let currency = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.1,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
  }
  //let order = ['ONE HUNDRED','TWENTY','TEN', 'FIVE', 'ONE','QUARTER','DIME','NICKEL','PENNY']
  var change = [];
  let status = 'INSUFFICIENT_FUNDS';
  let initialChangeDue = cash - price
  let changeDue = initialChangeDue
  let drawerTotal = 0
  cid.forEach((current) => {
    drawerTotal += parseFloat(Number(current[1]).toFixed(2))
    drawerTotal = parseFloat(Number(drawerTotal).toFixed(2))
  })
  if(changeDue < drawerTotal){
    let descOrderCID = cid.reverse()
    
    descOrderCID.forEach((currentCID) => {
      if(changeDue > currency[currentCID[0]]){
        let denominationAmount = Math.floor(changeDue/currency[currentCID[0]]) * currency[currentCID[0]]
        if(currentCID[1] < denominationAmount){
          denominationAmount = currentCID[1]
        }
        changeDue -= denominationAmount
        changeDue = parseFloat(Number(changeDue).toFixed(2))
        change.push([currentCID[0],denominationAmount])        
      }
    })

    let actualChange = 0
    change.forEach((current) => {
        actualChange += parseFloat(Number(current[1]).toFixed(2))
        actualChange =parseFloat(Number(actualChange).toFixed(2))
    })
    if(actualChange !== initialChangeDue){
      change = []
    }else{
      status = 'OPEN'
    }
  }else if(changeDue === drawerTotal){
    change = cid
    status = 'CLOSED'
  }

  return {'status': status, 'change':change};
}

/*checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);*/
let a = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

console.log(a)