
// const litObj = {
//     name: "Joe",
//     lastName: "doe",
//     age: 40,
//     hobbies: ["Music","Reading","Video Games"],
//     grades: {Math: 8, Biology: 6, it:9}
// };

// console.log(litObj)

// function fnObj(name,age){
//     this.firstname=name;
//     this.old=age;
// }
// const person1=new fnObj("Jonas",30)
// const person2=new fnObj("Mike",35)
// const person3=new fnObj("Jake",20)
// console.log(person1,person2,person3)

// console.log(this)

// const obj={
//     name:"johhny",
//     greeting: function (){
//         console.log("hello "+this.name)
//     },
// };
// obj.greeting();

// let person = {
//     female: {
//         name: "Marie",
//         lastname: "Curie",
//         inventions: {
//             first: "Theory of Radioactivity",
//             second: "Radium",
//             third: "Polonium",
//         },
//     },
//     male: {
//         name: "Thomas",
//         surname: "Edison",
//         inventions: {
//             first: "Electronic lightbulb",
//             second: "Motion picture camera",
//         },
//     },
// };
 
// console.log(person);
// console.log(person.female)
// const {female:{name:fName},male:{inventions:{first:TMFirstInvention}}}=person;
// console.log(fName)

// console.log(person.male.inventions.first)
// console.log(TMFirstInvention)



// let arr=[]
// let x=30
// function getRandomInt(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     x-=1
//     if (x>=0){
//         arr.push(Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)), getRandomInt(5,25)}
// }
// getRandomInt(5,25)
// console.log(arr)

// // a

// function equal(z){
//     return z == 10
//     }
// console.log((arr.filter(equal)).length)

// // b

// const maxV=Math.max(...arr)
// console.log(maxV)
// const maxind= arr.reduce((indices,el,index)=>{
//     if (el===maxV){
//         indices.push(index)
//     }
//     return indices;
// }, []);
// console.log("b  ",maxind)

// // c

// const brr = arr.reduce((ind,el,index)=>{
//     if (index%2==0){
//         ind.push(el)
//     }
//     return ind;
// }, []);
// af=0
// const add = brr.reduce((indf,el)=>{
//     if(el){
//         af=af+el
//     }
//     return af;
// }, []);
// console.log(brr)
// console.log("c  ",af)

// // d

// const bs = arr.reduce((ind,el,index)=>{
//     ind.push(el-index)
//     return ind;
// }, []);
// console.log("d  ",bs)

// // e

// function getRandomInt2(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     X10-=1
//     if (X10>=0){
//         arr.push(Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)), getRandomInt2(5,25)}
// }
// let X10=10
// getRandomInt2(5,25)
// console.log(arr)

// // f

// const evenArr = arr.reduce((ind,el,index)=>{
//     if (el%2==0){
//         ind.push(el)
//     }
//     return ind;
// }, []);
// console.log(evenArr)
// const oddArr = arr.reduce((ind,el,index)=>{
//     if (el%2!=0){
//         ind.push(el)
//     }
//     return ind;
// }, []);
// console.log(oddArr)

// // g

// const gArr = arr.reduce((ind,el,index)=>{
//     if (index%2==0 && el>15){
//         el=0
//     }
//     ind.push(el)
//     return ind;
// }, []);
// console.log(gArr)

// // h


// console.log(arr.findIndexOff(r => r>10))

////     1.2
// 1

let LA=[]
let x=200
function getRandomStr(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    x-=1
    if (x>=0){
        if (Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)==1){
            LA.push("A")
        }
        else if (Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)==2){
            LA.push("B")
        }
        else if (Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)==3){
            LA.push("C")
        }
        else LA.push("D")
        getRandomStr(1,4)
    }
}
getRandomStr(1,4)
console.log(LA)

// 2

console.log(LA.sort())

// 3

// function generateRandomNumbers(count, min, max) {
//     let uniqueNumbers = new Set();
//   while (uniqueNumbers.size < count) {
//     uniqueNumbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
//   }
//   return Array.from(uniqueNumbers);
// }
// const pirmasNepasikartojantis=generateRandomNumbers(100,100,999);
// const antrasNepasikartojantis=generateRandomNumbers(100,100,999);
// console.log("Pirmas nepasikartojantis masyvas", pirmasNepasikartojantis);
// console.log("Antras nepasikartojantis masyvas", antrasNepasikartojantis);

const numbers1 = Array(999).fill().map((_, index) => index + 1);
numbers1.sort(() => Math.random() - 0.5);
const num1Arr=numbers1.slice(1,101)
console.log(num1Arr)

const numbers2 = Array(999).fill().map((_, index) => index + 1);
numbers2.sort(() => Math.random() - 0.5);
const num2Arr=numbers2.slice(1,101)
console.log(num2Arr)

// 4

const num3Arr = num1Arr.filter(el=>!num2Arr.includes(el));
console.log("4444444   ",num3Arr)

// 5

const num4Arr = num1Arr.filter(el=>num2Arr.includes(el));
console.log(num4Arr)

// 6

////////////////////////////////////


let aobject = {
    first:"one",
    second:"two",
    third:"three",
    num1:1,
    num2:2,
    num3:3
}
console.log(aobject)
aobject.test="tester"


delete aobject.first
console.log(aobject)


console.log(aobject.hasOwnProperty('second'))

//
let NumObject = {
    num1:1,
    num2:2,
    num3:3
}


//

function txt(object){
    console.log(`${object.second} second ${object.third}`)
    return `${object.second} second ${object.third}`;
}
txt(aobject)

//

let pCount=Object.keys(aobject).length;
console.log(pCount)

const leFamily = {
    me: 33,
    father: 55,
    mother: 53,
    sister: 32,
    brother1: 28,
    brother2: 25,
    aunt: 61,
    uncle: 60,
    cousin1: 37,
    cousin2: 37,
    grandfather1: 79,
    grandmother1: 77,
    grandfather2: 81,
    grandmother2: 80,
    cat: 3,
    dog: 7,
    parrot: 2,
  };
  let count = 0
  for (let key in leFamily){
      if (leFamily[key]>65){
          count+=1
      }
  }
  console.log(count)

  let evenC=0
  let oddC=0
  for (let key in leFamily){
    if (leFamily[key]>65){
        count+=1
    }
}

let total=0
const numbb = [2,34,5874,67,77,1,99]
for (val of numbb){
    total+=val
}
console.log(total)

const wrd=["asda","dasfaf","afe42","234234","dssdg"]
for (let ct of wrd){
    console.log(`${ct} - ${ct.length}`)
}

const w="zzz"
console.log(w.length)