"use strict";
const yap = inp => console.log(inp)
// import {result} from "./data.js"
// console.log(result)
// localStorage.setItem("rez",JSON.stringify(result))



// const isInLS=localStorage.getItem("favorites")
// console.log(isInLS)

// const favoritesInLS=isInLS===null?[]:JSON.parse(isInLS)
// console.log(favoritesInLS)

// function movier(dat){
//     for (let i=0;i<result.length;i++){
//         if (result[i].id==dat)
//         console.log(result[i])
//     }
// }

// movier(829280)

// function favAddLS(ids){
    
// }

// let h1Content = document.querySelector("h1")
// console.log(h1Content)

// let tag = document.getElementsByTagName("h1")
// console.log(tag)

// let classs = document.getElementsByClassName("two")
// console.log(classs)

// let idd = document.getElementById("zz")
// console.log(idd)

// let h1=document.querySelector("h1")
// h1.setAttribute("id","mainHeading")
// h1.className="heading"
// h1.setAttribute("data-custom", "hi mark")
// console.log(h1)

// let element=document.querySelector("h1")
// let findAttrValue=element.getAttribute("id")
// console.log(findAttrValue)

// idd.removeAttribute("id")
// console.log(idd)

// idd.classList.add("beID")

// idd.classList.add("next")

// idd.classList.add("next2")

// idd.classList.remove("beID")
// // idd.classList.toggle("next2")

// idd.classList.replace("next2","new")

// console.log(idd.classList.contains("new"))

// h1.style.color="purple"


// let rootDiv =document.getElementById("root")

// let img=document.createElement("img")
// img.src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
// img.alt="zzzz"
// img.setAttribute("class","picture")

// rootDiv.appendChild(img)

// let txt=document.createElement("h2")
// txt.innerText="meow"

// rootDiv.insertAdjacentElement("beforebegin",txt)
// rootDiv.insertAdjacentElement("afterbegin",txt)
// rootDiv.insertAdjacentElement("beforeend",txt)
// rootDiv.insertAdjacentElement("afterend",txt)


// txt.remove()

// // rootDiv.removeChild(img)

// img.addEventListener("click",()=> {
//     if (img.style.borderRadius=="100%")img.style.borderRadius="0%"
//     else img.style.borderRadius="100%"
// }
// )


// function showAlert(){
//     alert("Labas")
// }

// let button=document.getElementById("myButton")

// // button.addEventListener("click", showAlert)

// setTimeout(() => {
//     button.removeEventListener("click", showAlert)
//     console.log("event listener removed")
// }, 3000);

// let inputValue=document.getElementById("vardasInput")
// let forma = document.querySelector("form")

// button.addEventListener("click",(event)=>{
//     event.preventDefault()
//     console.log(inputValue.value)

//     let txtUI=document.createElement("p")
//     txtUI.innerText=inputValue.value
//     rootDiv.appendChild(txtUI)

//     // inputValue.value=""
//     forma.reset()
// })

// // let labelTitle=document.querySelector(".vardasLabel")
// // labelTitle.addEventListener("click",(event)=>{
// //     event.preventDefault()
// //     console.log(event)
// // })


// yap("zzzzzzzz")
// let body = document.querySelector("body")

// let box = document.createElement("div")
// body.appendChild(box)

// let text = document.createElement("h1")
// text.innerText="hello world"

// let text2 = document.createElement("h2")
// text2.innerText="Hi again"

// box.append(text)
// text.append(text2)

// box.className="myClass"
// box.setAttribute("id","myId")

// let image = document.createElement("img")
// image.setAttribute("src","https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg")
// image.setAttribute("alt","img desc")

// box.append(image)



// let tags = document.getElementsByTagName("p")

// for (let i=0;i<tags.length;i++){
//     if (i%2==0){
//         tags[i].style.color="Red"
//         tags[i].style.background="black"
//     }
//     else{
//         tags[i].style.color="white"
//         tags[i].style.background="green"
//     }
// }



// let button=document.getElementById("btn")
// let inputValue=document.getElementById("inpt")


// let box2 = document.getElementById("box2")

// button.addEventListener("click",(event)=>{
//     event.preventDefault()
//     console.log(inputValue.value)

//     let txtUI=document.createElement("p")
//     txtUI.innerText=inputValue.value
//     box2.appendChild(txtUI)

//     inputValue.value=""
// });






// let addButton = document.getElementById("buttonAdd")
// let remButton = document.getElementById("buttonRemove")

// addButton.style = "color:green"
// addButton.style.backgroundColor = "yellow"


// remButton.style = "color:red"
// remButton.style.backgroundColor = "black"


// addButton.addEventListener("click",()=>{
//     let randomEl=document.createElement("p")
//     randomEl.innerText="I am alive"
//     randomEl.setAttribute("id","killme")
//     remButton.insertAdjacentElement("afterend",randomEl)
// })

// remButton.addEventListener("click",()=>{
//     let remEl=document.getElementById("killme")
//     remEl.remove()
// })







// let clicker=document.getElementById("clicker")

// let countBox=document.createElement("p")

// clicker.insertAdjacentElement("beforeBegin",countBox)

// let counter=0
// clicker.addEventListener("click",()=>{
//     counter+=1
//     countBox.innerText=counter
// })



//   1
let el1=document.createElement("p")
let el2=document.createElement("p")
let el3=document.createElement("p")
let el4=document.createElement("p")
let el5=document.createElement("p")

//   2
el1.innerText="one"
el2.innerText="two"
el3.innerText="three"
el4.innerText="four"
el5.innerText="five"

//   3
el1.setAttribute("id", "one")
el2.setAttribute("class", "two")
el3.setAttribute("selc", "three")
el4.setAttribute("class", "four")
el5.setAttribute("id", "five")


clicker.insertAdjacentElement("afterend",el1)
clicker.insertAdjacentElement("afterend",el2)
clicker.insertAdjacentElement("afterend",el3)
clicker.insertAdjacentElement("afterend",el4)
clicker.insertAdjacentElement("afterend",el5)


document.getElementById("one").style.color="red";
document.getElementsByClassName("two")[0].style.color="blue"
document.querySelector('[selc="three"]').style.color="green"
document.getElementsByTagName("p")[1].style.color="yellow"
document.getElementById("five").style.color="gray";

//   4
let div1=document.createElement("div")
let div2=document.createElement("div")
let div3=document.createElement("div")
let div4=document.createElement("div")
let div5=document.createElement("div")
let div6=document.createElement("div")

el1.insertAdjacentElement("afterend",div1)
el1.insertAdjacentElement("afterend",div2)
el1.insertAdjacentElement("afterend",div3)
el1.insertAdjacentElement("afterend",div4)
el1.insertAdjacentElement("afterend",div5)
el1.insertAdjacentElement("afterend",div6)

div1.style="width:100px;height:100px;background-color:red"
div2.style="width:100px;height:100px;background-color:blue"
div3.style="width:100px;height:100px;background-color:green"
div4.style="width:100px;height:100px;background-color:yellow"
div5.style="width:100px;height:100px;background-color:black"
div6.style="width:100px;height:100px;background-color:gray"


//   5
let colorSwitch=document.createElement("button")
colorSwitch.innerText="SWITCH"
div1.insertAdjacentElement("afterend",colorSwitch)

colorSwitch.addEventListener("click",()=>{
    function randomNum(){
        const rn = Math.floor(Math.random() * 255)
        return rn
    }
    div1.style=`width:100px;height:100px;background-color:rgb(${randomNum()},${randomNum()},${randomNum()})`
    div2.style=`width:100px;height:100px;background-color:rgb(${randomNum()},${randomNum()},${randomNum()})`
    div3.style=`width:100px;height:100px;background-color:rgb(${randomNum()},${randomNum()},${randomNum()})`
    div4.style=`width:100px;height:100px;background-color:rgb(${randomNum()},${randomNum()},${randomNum()})`
    div5.style=`width:100px;height:100px;background-color:rgb(${randomNum()},${randomNum()},${randomNum()})`
    div6.style=`width:100px;height:100px;background-color:rgb(${randomNum()},${randomNum()},${randomNum()})`

})


//   6

const masyvas = ["zodis","obuolys","remote","Apples","Red fox","Blue fox","Jester","Ace","Diamond","grass","Waterfall","Explosion","Christmas","numbers","Tractor","Trace","Build","Concrete","Windows","Snow","Hoodlum","Rocketship"]



let p1=document.createElement("p")
let p2=document.createElement("p")
let p3=document.createElement("p")
let p4=document.createElement("p")
let p5=document.createElement("p")
let p6=document.createElement("p")

colorSwitch.insertAdjacentElement("afterend",p1)
colorSwitch.insertAdjacentElement("afterend",p2)
colorSwitch.insertAdjacentElement("afterend",p3)
colorSwitch.insertAdjacentElement("afterend",p4)
colorSwitch.insertAdjacentElement("afterend",p5)
colorSwitch.insertAdjacentElement("afterend",p6)

for (let i=6;i<12;i++){
    function randWord(){
        let saidWord=masyvas[Math.floor(Math.random() * masyvas.length)]
        return saidWord
    }
    document.getElementsByTagName("p")[i-1].innerText=`${randWord()}`
}

