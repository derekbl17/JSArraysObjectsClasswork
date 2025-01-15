import bomber from "./javaScriptP/js.js";
'use strict';
// let avg
// function avgCounter(num1,num2,num3,num4,num5){
//     avg=(num1+num2+num3+num4+num5)/5
//     console.log(avg)
//     return avg;
// }
// avgCounter(8,5,9,9,8)
// ////////////////////////2
// function stipendijaChecker(){
//     if (avg>=7) console.log("stipendija gaus")
//     else console.log("stipendijos negaus")
// }
// stipendijaChecker()
// ////////////////////////3
// let nameG
// function nameReturner(nam){
//     nameG=nam
//     return nameG;
// }
// nameReturner("Jake")
// console.log(nameG)
// //////////////////////4
// let count=0
// function greet(){
//     count++
//     console.log("Welcome! "+nameG,"Your login count: ",count)
// }
// greet()
// greet()
// greet()
// greet()
// /////////////5
// function yearlySal(hName,monthSal){
//     let yearSal=monthSal*12
//     console.log(hName,"has a yearly salary of -",yearSal)
// }
// yearlySal("Mike",1700)
// /////////////6
// function roadTrip(distance,gasPrice){
//     let burn=0.6
//     let burned=((distance*burn)*gasPrice).toFixed(2)
//     console.log(burned)
// }
// roadTrip(50,4.1)
// bomber()
// bomber()
// bomber()












////////////////////////
//         1          //
////////////////////////

// function inputOutput(numb1,numb2){
//     let x=numb1+numb2
//     alert(x)
// }
// inputOutput(parseInt(prompt("first number")),parseInt(prompt("second number")))

///////////////////////
//         2

// function kvadrat(skaic){
//     let ats = skaic**2
//     alert(ats)
// }
// kvadrat(parseInt(prompt("Input number")))

//////////////////////
//         3

// function positivity(nom){
//     nom >=0 ? alert("Teigiamas"):alert("Neigiamas")
// }
// positivity(parseInt(prompt("skaicius")))

//////////////////////
//          4

// function wordConnector(word1,word2,word3,word4){
//     let connected = word1+" "+word2+" "+word3+" "+word4
//     alert(connected)
// }
// wordConnector(prompt("words"),prompt("more words"),prompt("even more words"),prompt("last words"),)

//////////////////////
//          5
// function evenOdd(skc){
//     skc %2 == 0 ? alert("Even"):alert("Odd")
// }
// evenOdd(parseInt(prompt("number to check if its even or odd")))

//////////////////////
//          6






//                    MATH                        
//    1

function meth(numb){
    let out = Math.round(Math.sqrt(numb))
    console.log(out)
}
meth(66)


function aaa(){
    // let rout = Math.floor(Math.random() * 20)
    let rout = (Math.random()*3).toFixed();
    console.log(rout)
}
aaa()

function maxing(one,two,three){
    let outie=Math.max(one,two,three)
    console.log(outie)
}
maxing(5,60,20)