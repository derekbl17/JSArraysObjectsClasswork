import {result} from "./data.js"
import {infoDump} from "./data2.js"

console.log(result)

const favArr=[]
localStorage.getItem("favorites")==null ? localStorage.setItem("favorites", JSON.stringify(favArr)) : console.log("it is there!")

function movieFind(movieID){
    for (let i=0;i<result.length; i++){
        if (result[i].id==movieID){
            console.log(`${result[i].id}\n${result[i].title}`)
        }
    }
}

movieFind(436270)
movieFind(829280)

function movieAdd(movieID){
    const exists = favArr.some(movie => movie.startsWith(movieID))
    for (let i=0;i<result.length; i++){
        if (result[i].id==movieID && !exists){
            favArr.push(`${result[i].id} ${result[i].title}`)
            localStorage.setItem("favorites", JSON.stringify(favArr))
        }
    }
}
movieAdd(436270)
movieAdd(436270)
movieAdd(829280)
movieAdd(829280)
console.log(favArr)


function readLS(){
    const ls=JSON.parse(localStorage.getItem("favorites"))
    for (let x = 0;x<ls.length;x++){
        for (let i=0;i<result.length;i++){
            if (result[i].id==ls[x].slice(0,6))console.log(result[i])
        }
    }
}
readLS()
console.log(localStorage.getItem("favorites"));


function lsDeleter(targetID){
    let storedArr = JSON.parse(localStorage.getItem("favorites"))
    const modArr = storedArr.filter(movie => !movie.startsWith(targetID))
    localStorage.setItem("favorites",JSON.stringify(modArr))
}
lsDeleter(436270)
console.log(localStorage.getItem("favorites"))

























// const countryArr = []
// console.log(infoDump.length)
// console.log(infoDump[26].name.official)
// countryArr.push({Index: 0, "Country name": infoDump[0].name.official, Capital: infoDump[0].capital })
// console.log(countryArr)
const countryArr = []
function LSpusher(){
    for (let i=0;i<infoDump.length;i++){
        if (infoDump[i].capital){
            countryArr.push({index: i, "Country name": infoDump[i].name.official, capital: infoDump[i].capital[0]})
        }
        else countryArr.push({index: i, "Country name": infoDump[i].name.official, capital: "Data not found"})
        // else countryArr.push({index: i, "Country name": infoDump[i].name.official, Capital: "Data not found"})
        console.log(`${countryArr[i].index} data:\nCountry name: ${countryArr[i]["Country name"]}\nCapital: ${countryArr[i].capital}`)
    }
    localStorage.setItem("countries",JSON.stringify(countryArr))
}
LSpusher()
console.log(countryArr)
console.log(infoDump)


console.log(infoDump[1].capital[0])