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


for (let i=0;i<7;i++){
    let pp=document.createElement("p")
    function randWord(){
        let saidWord=masyvas[Math.floor(Math.random() * masyvas.length)]
        return saidWord
    }
    pp.innerText= `${randWord()}`
    colorSwitch.insertAdjacentElement("afterend",pp)
}

// let p1=document.createElement("p")
// let p2=document.createElement("p")
// let p3=document.createElement("p")
// let p4=document.createElement("p")
// let p5=document.createElement("p")
// let p6=document.createElement("p")

// colorSwitch.insertAdjacentElement("afterend",p1)
// colorSwitch.insertAdjacentElement("afterend",p2)
// colorSwitch.insertAdjacentElement("afterend",p3)
// colorSwitch.insertAdjacentElement("afterend",p4)
// colorSwitch.insertAdjacentElement("afterend",p5)
// colorSwitch.insertAdjacentElement("afterend",p6)

// for (let i=6;i<12;i++){
//     function randWord(){
//         let saidWord=masyvas[Math.floor(Math.random() * masyvas.length)]
//         return saidWord
//     }
//     document.getElementsByTagName("p")[i-1].innerText=
// }


//////////////////






console.log(document.getElementsByTagName("table"))

tableButton.addEventListener("click",()=>{
    document.getElementById("tableContainer").insertAdjacentElement("beforeend",(document.createElement("table")))
    for (let i=0;i<document.getElementById("rows").value;i++){
        document.getElementsByTagName("table")[0].appendChild(document.createElement("tr"))
    }


    for (let j=0;j<document.getElementById("rows").value;j++){
        for (let z=0;z<document.getElementById("colls").value;z++){
        document.getElementsByTagName("tr")[j].appendChild(document.createElement("td"))
        }
    }


    for (let x=0;x<document.querySelectorAll("td").length;x++){
        document.getElementsByTagName("td")[x].innerText="data"
        if (x%2==0){
            document.getElementsByTagName("td")[x].style="border:1px solid black;background-color:red"
        }
        else {
            document.getElementsByTagName("td")[x].style="border:1px solid black;background-color:green"
        }
    }
    document.getElementsByTagName("table")[0].style="border:1px solid black"
})




////////////////////////


let gallery = document.getElementById("gala");
gallery.setAttribute("display", "flex");
gallery.style = "position:relative; padding: 3px; margin:5px;";

let images = [];
let likes = [];

const imgLib = [
    "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg",
    "https://dubaitickets.tours/wp-content/uploads/2023/03/img-worlds-of-adventure-dubai-ticket-9-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s",
    "https://cms.imgworlds.com/assets/e3873302-212a-4c3a-aab3-c3bee866903c.jpg?key=home-gallery",
    "https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp",
    "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoPqQ0ai6pu6YUDIn4cbkLH5XduPwZq2hKg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeXoPJvCJcPL4MhitJzrSvJUSVxz5femYtw&s",
    "https://www.arabiantourpackages.com/assets/images/tours/gallery/img-world-dubai-tickets-3.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MihrG6SuOD1aoln69boEKA2ogNHTonrWOw&s",
    "https://cdn-icons-png.flaticon.com/512/8760/8760611.png"
];


for (let i = 0; i <= 10; i++) {
    let div = document.createElement("div");
    div.style = "width: min-content; display:inline-block;";
    gallery.appendChild(div);

    let img = document.createElement("img");
    img.src = imgLib[i];
    img.alt = "image like that";
    img.style = "height:10rem; width:15rem; border: solid black; padding:1px; margin:1px;";
    div.appendChild(img);
    images.push(img);


    let like = document.createElement("p");
    like.innerHTML = "&#9829;";
    like.style = "position:absolute; margin-left:5px; color:gray; font-size:30px; cursor:pointer;";
    like.addEventListener("click", () => {
        if (like.style.color === "gray") {
            like.style.color = "red";
            localStorage.setItem(`image #${i}`, img.src);
        } else {
            localStorage.removeItem(`image #${i}`);
            like.style.color = "gray";
        }
    });

    likes.push(like);
    img.insertAdjacentElement("beforebegin", like);

    if (localStorage.getItem(`image #${i}`)) {
        like.style.color = "red";
    }
}













// let gallery = document.getElementById("gala")
// gallery.setAttribute("display","flex")
// gallery.style="position:relative; padding: 3px; margin:5px;"

// let symbol = document.createElement("p")
// symbol.innerHTML="&#9829;"



// for (let i=0;i<=10;i++){
//     gallery.appendChild(document.createElement("div"))
//     gallery.getElementsByTagName("div")[i].appendChild(document.createElement("img"))
//     gallery.getElementsByTagName("div")[i].style="width: min-content; display:inline-block;"
// }


// const imgLib = ["https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg",
//     "https://dubaitickets.tours/wp-content/uploads/2023/03/img-worlds-of-adventure-dubai-ticket-9-1.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s",
//     "https://cms.imgworlds.com/assets/e3873302-212a-4c3a-aab3-c3bee866903c.jpg?key=home-gallery",
//     "https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp",
//     "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoPqQ0ai6pu6YUDIn4cbkLH5XduPwZq2hKg&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeXoPJvCJcPL4MhitJzrSvJUSVxz5femYtw&s",
//     "https://www.arabiantourpackages.com/assets/images/tours/gallery/img-world-dubai-tickets-3.jpeg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MihrG6SuOD1aoln69boEKA2ogNHTonrWOw&s",
//     "https://cdn-icons-png.flaticon.com/512/8760/8760611.png"];


// for (let i=0;i<document.images.length;i++){
//     document.images[i].setAttribute("src",`${imgLib[i]}`)
//     document.images[i].setAttribute("alt","image like that")
//     document.images[i].style="height:200px; width:300px;  border: solid black; padding:1px; margin:1px;"
// }


// for (let i=0;i<document.images.length;i++){
//     document.images[i].insertAdjacentElement("beforebegin",document.createElement("p"))
//     gallery.getElementsByTagName("p")[i].style="position:absolute; margin-left:5px; color:gray; font-size:30px; cursor:pointer; "
//     gallery.getElementsByTagName("p")[i].innerHTML="&#9829;"
//     gallery.getElementsByTagName("p")[i].addEventListener("click",()=>{
//         if (gallery.getElementsByTagName("p")[i].style.color=="gray"){
//             gallery.getElementsByTagName("p")[i].style.color="red"
//             localStorage.setItem(`image #${i}`,gallery.getElementsByTagName("img")[i].src)
//         }
//         else{
//             localStorage.removeItem(`image #${i}`)
//             gallery.getElementsByTagName("p")[i].style.color="gray"
//         }
//     })
// }




//////////////////////////////////////////


























const productArray = []
function updateLocalStorage(){
    localStorage.setItem("Products",JSON.stringify(productArray))
}

// make form
const form = document.createElement("form")
gallery.insertAdjacentElement("afterend", form)

// fieldset in form
const formFieldset = document.createElement("fieldset")
form.appendChild(formFieldset)

// containers for inputs and labels
const productIdContainer = document.createElement("div")
productIdContainer.style = "width: 100%;"
formFieldset.appendChild(productIdContainer)

const productNameContainer = document.createElement("div")
productNameContainer.style = "width: 100%;"
formFieldset.appendChild(productNameContainer)

const productQuantityContainer = document.createElement("div")
productQuantityContainer.style = "width: 100%;"
formFieldset.appendChild(productQuantityContainer)




////// Functions

// web product list display
function displayProducts() {
    const products = JSON.parse(localStorage.getItem("Products")) || [];
    let productList = document.getElementById("product-list");

    // create list
    if (!productList) {
        productList = document.createElement("ul");
        productList.setAttribute("id", "product-list");
        form.appendChild(productList);
    }
    // Clear list
    productList.innerHTML = "";
    // Fill list
    products.forEach(product => {
        const item = document.createElement("li");
        item.textContent = `ID: ${product.id}, Name: ${product.name}, Quantity: ${product.quantity}`;
        productList.appendChild(item);
    });
}
displayProducts()

// duplicate checker
function checkDuplicate(idCheck) {
    const products = JSON.parse(localStorage.getItem("Products")) || [];
    return products.some(product => product.id == idCheck);
}

///// buttons


// function to check for duplicate IDs in array
// function checkDuplicates(idCheck){
//     for (let i=0;i<productArray.length;i++){
//         if (productArray[i].id == idCheck)return true
//         else return false
//     }
// }
// check for duplicate IDs in localstorage

// function checkDuplicate(idCheck){
//     for (let i in JSON.parse(localStorage.getItem("Products"))){
//         return JSON.parse(localStorage.getItem("Products"))[i].id=idCheck
//     }
// }



// add product to array if all inputs are valid
const addButton = document.createElement("button")
addButton.innerHTML = "Add new item"
// addButton.addEventListener("click",(e)=>{
//     e.preventDefault()
//     if (productIdInput.value && productNameInput.value && productQuantityInput.value && !checkDuplicates(productIdInput.value)){
//         const newItem = {id:`${productIdInput.value}`, name:`${productNameInput.value}`, quantity:`${productQuantityInput.value}`}
//         productArray.push(newItem)
//         updateLocalStorage()
//     }
//     else if (checkDuplicates(productIdInput.value))alert("Id already exists")
// })

addButton.addEventListener("click",(e)=>{
    e.preventDefault()

    if (!productIdInput.value.trim() || !productNameInput.value.trim() || !productQuantityInput.value.trim() || productQuantityInput.value.trim() <= 0) {
        alert("Please enter valid inputs.");
        return;
    }

    if (!checkDuplicate(productIdInput.value)){
        const newItem = {id:`${productIdInput.value}`, name:`${productNameInput.value}`, quantity:`${productQuantityInput.value}`}
        productArray.push(newItem)
        updateLocalStorage()
        displayProducts();
    }
    else alert("Id already exists")
})

const editButton = document.createElement("button")
editButton.innerHTML = "Edit existing item"

editButton.addEventListener("click", (e) => {
    e.preventDefault();
    const id = productIdInput.value.trim();
    const name = productNameInput.value.trim();
    const quantity = productQuantityInput.value.trim();

    const products = JSON.parse(localStorage.getItem("Products")) || [];
    const productIndex = products.findIndex(product => product.id == id);

    if (productIndex > -1) {
        products[productIndex] = { id, name, quantity: parseInt(quantity, 10) };
        localStorage.setItem("Products", JSON.stringify(products));
        displayProducts();
        alert("Product updated successfully!");
    } else {
        alert("Product not found.");
    }
});


const removeButton = document.createElement("button")
removeButton.innerHTML = "Remove existing item"

removeButton.addEventListener("click", (e) => {
    e.preventDefault();
    const id = productIdInput.value.trim();

    const products = JSON.parse(localStorage.getItem("Products")) || [];
    const updatedProducts = products.filter(product => product.id != id);

    if (products.length !== updatedProducts.length) {
        localStorage.setItem("Products", JSON.stringify(updatedProducts));
        alert("Product removed successfully!");
        displayProducts();
    } else {
        alert("Product not found.");
    }
});



// button container
const ButtonContainer = document.createElement("div")
ButtonContainer.style="display:flex; justify-content: space-between; padding: 1%;"
form.appendChild(ButtonContainer)
ButtonContainer.appendChild(addButton)
ButtonContainer.appendChild(editButton)
ButtonContainer.appendChild(removeButton)

/// ID
const productIdLabel = document.createElement("label")
productIdLabel.setAttribute("for","productIdInput")
productIdLabel.innerHTML = "Product id"
productIdContainer.appendChild(productIdLabel)

const productIdInput = document.createElement("input")
productIdInput.setAttribute("type","number")
productIdInput.setAttribute("id","productIdInput")
productIdInput.required = true
productIdInput.style = "width: 100%;"
productIdContainer.appendChild(productIdInput)
/// NAME
const productNameLabel = document.createElement("label")
productNameLabel.innerHTML = "Product name"
productNameLabel.setAttribute("for","productNameInput")
productNameContainer.appendChild(productNameLabel)

const productNameInput = document.createElement("input")
productNameInput.setAttribute("type","text")
productNameInput.setAttribute("id","productNameInput")
productNameInput.required = true
productNameInput.style = "width: 100%;"
productNameContainer.appendChild(productNameInput)
/// QUANTITY
const productQuantityLabel = document.createElement("label")
productQuantityLabel.setAttribute("for","productQuantityInput")
productQuantityLabel.innerHTML = "Product Quantity"
productQuantityContainer.appendChild(productQuantityLabel)

const productQuantityInput = document.createElement("input")
productQuantityInput.setAttribute("type","number")
productQuantityInput.setAttribute("id","productQuantityInput")
productQuantityInput.required = true
productQuantityInput.style = "width: 100%;"
productQuantityContainer.appendChild(productQuantityInput)
///




// console.log(JSON.parse(localStorage.getItem("Products")))


// function checkDuplicate(idCheck){
//     for (let i in JSON.parse(localStorage.getItem("Products"))){
//         console.log(JSON.parse(localStorage.getItem("Products"))[i].id==idCheck)
//     }
// }
// checkDuplicate(3)



