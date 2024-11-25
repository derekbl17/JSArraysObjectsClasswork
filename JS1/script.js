import {result} from "./data.js"
console.log(result)
localStorage.setItem("rez",JSON.stringify(result))



const isInLS=localStorage.getItem("favorites")
console.log(isInLS)

const favoritesInLS=isInLS===null?[]:JSON.parse(isInLS)
console.log(favoritesInLS)

function movier(dat){
    for (let i=0;i<result.length;i++){
        if (result[i].id==dat)
        console.log(result[i])
    }
}

movier(829280)

function favAddLS(ids){
    
}