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


yap("zzzzzzzz")
let body = document.querySelector("body")

let box = document.createElement("div")
body.appendChild(box)

let text = document.createElement("h1")
text.innerText="hello world"

let text2 = document.createElement("h2")
text2.innerText="Hi again"

box.append(text)
text.append(text2)

box.className="myClass"
box.setAttribute("id","myId")

let image = document.createElement("img")
image.setAttribute("src","https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg")
image.setAttribute("alt","img desc")

box.append(image)



let tags = document.getElementsByTagName("p")

for (let i=0;i<tags.length;i++){
    if (i%2==0){
        tags[i].style.color="Red"
        tags[i].style.background="black"
    }
    else{
        tags[i].style.color="white"
        tags[i].style.background="green"
    }
}



let button=document.getElementById("btn")
let inputValue=document.getElementById("inpt")


let box2 = document.getElementById("box2")

button.addEventListener("click",(event)=>{
    event.preventDefault()
    console.log(inputValue.value)

    let txtUI=document.createElement("p")
    txtUI.innerText=inputValue.value
    box2.appendChild(txtUI)

    inputValue.value=""
});


let addButton = document.getElementById("buttonAdd")
let remButton = document.getElementById("buttonRemove")

addButton.addEventListener("click",()=>{
    let randomEl=document.createElement("p")
    randomEl.innerText="I am alive"
    randomEl.setAttribute("id","killme")
    remButton.insertAdjacentElement("afterend",randomEl)
})

remButton.addEventListener("click",()=>{
    let remEl=document.getElementById("killme")
    remEl.remove()
})

let clicker=document.getElementById("clicker")


let count=0
clicker.addEventListener("click",()=>{
    let counter=document.createElement("p")
    count+=1
    yap(count)
    clicker.insertAdjacentElement("afterend",count)
})