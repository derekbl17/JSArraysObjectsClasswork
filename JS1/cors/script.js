"use strict";

const rootContainer = document.getElementById("ROOT");
// const showPromise = fetch("https://dog.ceo/api/breeds/image/random");

// console.log(showPromise);

// fetch("https://dog.ceo/api/breeds/image/random").then(
//   (Response) => {
//     console.log(Response)
//     return Response.json()}
// ).then((data)=>console.log(data))
// .catch((err) => console.log(err.message));

// const getPhoto = async()=>{
//     try{
//         const response = await fetch("https://dog.ceo/api/breeds/image/random");
//         const data = await response.json();
//         console.log(data)
//     } catch(error) {
//         console.error(error);
//     }
// };

// getPhoto()

/////////////////////////

// // button to generate coffee img
// const generateCoffButton = document.createElement('button')
// generateCoffButton.innerText = 'MAKE ME COFFEE!!'
// generateCoffButton.style = 'display:block;'
// rootContainer.appendChild(generateCoffButton)

// // img element make & add
// const imageElement = document.createElement('img')
// imageElement.style = 'max-width: 800px; max-height: 800px; margin: 3px;'
// rootContainer.appendChild(imageElement)

// // on button click fetch image and set its url to imageElement src
// generateCoffButton.addEventListener("click", (event) => {
//     const getImg = async()=>{
//         const respond = await fetch('https://coffee.alexflipnote.dev/random.json')
//         const imgUrl = await respond.json()
//         imageElement.src = `${imgUrl.file}`
//         imageElement.alt = 'a hot cup of coffee'
//     }
//     getImg()
// })

// const searchInput = document.createElement('input')
// const buttonSearch = document.createElement('button')
// const infoArea = document.createElement('section')
// const flagImg = document.createElement('img')
// const countryNfoField = document.createElement('p')
// infoArea.append(countryNfoField)
// infoArea.append(flagImg)
// buttonSearch.innerText = 'SEARCH'
// rootContainer.append(searchInput, buttonSearch, infoArea)

// const countries = []

// buttonSearch.addEventListener('click', (event) => {
//     const find = async()=>{
//         const response = await fetch(`https://restcountries.com/v3.1/name/${searchInput.value}`)
//         const nfo = await response.json()
//         console.log(nfo)
//         countryNfoField.innerText=`Official name:${nfo[0].name.official}\nCapital:${nfo[0].capital}`
//         flagImg.src = `${nfo[0].flags.png}`
//     }
//     find()
// })

const searchInput = document.createElement("input");
const buttonSearch = document.createElement("button");
const countryArea = document.createElement("section");
countryArea.style = "display:flex; flex-wrap: wrap;";

buttonSearch.innerText = "SEARCH";
rootContainer.append(searchInput, buttonSearch, countryArea);

buttonSearch.addEventListener("click", (event) => {
  countryArea.innerHTML = "";
  const find = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${searchInput.value}`
    );
    const nfo = await response.json();
    console.log(nfo);
    if (nfo.message) {
      alert("Error: bad input");
    } else {
      for (let i = 0; i < nfo.length; i++) {
        const card = document.createElement("div");
        card.style = "border:1px solid black; padding: 2px; margin: 2px";
        const countryNfoField = document.createElement("p");
        const flagImg = document.createElement("img");
        countryNfoField.innerText = `Name:${nfo[i].name.common}\nCapital:${nfo[i].capital}`;
        flagImg.src = `${nfo[i].flags.png}`;
        card.append(countryNfoField, flagImg);
        countryArea.append(card);
      }
    }
  };
  find();
});
