('use strict');
const penguin=["mole",2,3,7,"hole"]
const bird=[10,20,30,0.1,40,50,60,9,11,12,13,154,10]
// const rez=penguin.concat(bird)
// console.log(rez)
/////////////////////////////////////////////////////////////////////////////////
const rez2=penguin.every((el)=>el%2==0);
// console.log(rez2)
/////////////////////////////////////////////////////////////////////////////////
// const rezfill=penguin.fill("money",3,4)
// console.log(rezfill)
////////////////////////////////////////////////////////
const rezfilter=bird.filter(el=>el%2==0)
// console.log(rezfilter)
///////////////////////////////////////////////////////////
const rezFind=bird.find(el=>el % 2==0)
// console.log(rezFind)
/////////////////////////////////////////////////////
const rezFindIndex=bird.findIndex((el) => el==20)
// console.log(rezFindIndex)
///////////////////////////////////////////////////
// const resultForEach=bird.forEach((el, index)=>console.log(el*index))
/////////////////////////////////////////////////////
// console.log(bird.includes(20))
//////////////////////////////////////////////
console.log(bird.indexOf(30,1))
///////////////////////////////////////
console.log(bird.join(" CHO "),"join")
////////////////////////////////////////
console.log(bird.lastIndexOf(10),'last index of');
//////////////////////////////////////
console.log(bird.length,"length");
//////////////////////////////////////////////
// console.log(bird.map())
////////////////////////////////////////
// const massy=[]
// massy.push(1)
// console.log(massy)
// massy.push(2)
// console.log(massy)
// massy.push(3)
// console.log(massy)
// massy.push(100)
// console.log(massy)

////////////////////////////////

// console.log(penguin) // ['mole',2,3,7,'hole']
// console.log(penguin.pop()) // hole
// console.log(penguin.pop()) // 7
// console.log(penguin.pop()) // 3

// const resultPop = penguin.pop()
// console.log(resultPop)    //  2
// console.log(penguin)      // ['mole']

///////////////////////////////////
const resultRed=bird.reduce((acc,el)=>acc+el,0)
console.log(resultRed)
//////////////////////////////////
const trashArray=[10,17,21,34,6,7,8,9,5,4,3]
console.log(trashArray.shift())
console.log(trashArray)
//////////////////////////////////
const slicer=trashArray.slice()
const slicer1=trashArray.slice(2,4)
const slicer2=trashArray.slice(5)
console.log(slicer)
console.log(slicer1)
console.log(slicer2)
////////////////////////////////////
const some=slicer.some((el)=>el==17)
console.log(some)
/////////////////////////////////////
const sort=slicer.slice().sort((a, b)=>a-b)
console.log(sort)

const worder=["okahhh","lola","hmm","asda"]
const tosorted=worder.toSorted((a,b)=> a.length-b.length)
console.log(tosorted)
////////////////////
const unshifted=trashArray.unshift("23")
console.log(unshifted)
//////////////

const spliced=worder.splice(2,1,"oats");

console.log(spliced)