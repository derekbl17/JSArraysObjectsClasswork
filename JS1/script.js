"use strict";
const firstName="Jonas"
console.log(firstName)

let age=25
console.log(age)
console.log(firstName,age)

console.log(typeof firstName)
console.log(typeof age)

const sum="90"+1-14**9000;
console.log(sum)

console.log(90**2**7)

let nmb="100"/177777777777777777777777777777777777777778888888888888888888888888888888888888888887666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777777777777777777777777777777777770999
console.log(nmb)

let w1="W1"
let w2="W23456"
let w3="W3"
console.log(w1,w2,w3)
console.log(w1+w2+"odpfkhpodfh"+w3)
console.log(w1,w2,w3)
console.log(`${w1} ${w2} odpfkhpodfh ${w3}`)

console.log(w2.charAt(0))

console.log(w2.length)
console.log(w2.charAt(w2.length-1))
console.log(w1.concat(w3))
console.log(w2.endsWith(6))
console.log(w2.endsWith(NaN))
console.log(w2.slice(1,5))
let a
let b=0
function big(nb){
    a=nb**nb
    b=b+a
}
big(79)
big(6)
console.log(b)

let inputValue="50"
let countingSum=parseInt(inputValue)+4
let countingSum1=+inputValue+4
let countingSum2=inputValue*1+4
let countingSum3=inputValue/1+4
let countingSum4=Math.floor(inputValue)+4
let countingSum5=~~inputValue+4
console.log(countingSum)
console.log(countingSum1)
console.log(countingSum2)
console.log(countingSum3)
console.log(countingSum4)
console.log(countingSum5)