function convertToRoman(num) {
let millares = new Map()
millares.set(1,'M')
millares.set(2,'MM')
millares.set(3, 'MMM')

let centenas = new Map()
centenas.set(1,'C')
centenas.set(2,'CC')
centenas.set(3,'CCC')
centenas.set(4,'CD')
centenas.set(5,'D')
centenas.set(6,'DC')
centenas.set(7,'DCC')
centenas.set(8,'DCCC')
centenas.set(9,'CM')

let decenas = new Map()
decenas.set(1,'X')
decenas.set(2,'XX')
decenas.set(3,'XXX')
decenas.set(4,'XL')
decenas.set(5,'L')
decenas.set(6,'LX')
decenas.set(7,'LXX')
decenas.set(8,'LXXX')
decenas.set(9,'XC')


let unidades = new Map()
unidades.set(1,'I')
unidades.set(2,'II')
unidades.set(3,'III')
unidades.set(4,'IV')
unidades.set(5,'V')
unidades.set(6,'VI')
unidades.set(7,'VII')
unidades.set(8,'VIII')
unidades.set(9,'IX')

let positionToValue = [unidades, decenas, centenas, millares]
let values = []
let reversedArr = num.toString().split('').reverse()
reversedArr.forEach( (current, index) => {
  if(positionToValue[index].has(parseInt(current, 10))){
    values.push(positionToValue[index].get(parseInt(current, 10)))
  }
})
let result = values.reverse().join('')
console.log(result)
return result
}


convertToRoman(36);