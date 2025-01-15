// for(let i=10;i>=1;i--){
//     console.log(i)
// }
// console.log("3...........")
// //

// for(let i=0;i<=10;i+=2){
//     console.log(i)
// }
// console.log("4..........")
// //
// for(let i=0;i<=10;i++){
//     let b=i*2
//     console.log(b)
// }
// console.log("5..........")
// //
// for(let i=0;i<=5;i++){
//     if (i==3) break
//     console.log(i)
// }
// console.log("6......")
// //
// for(let i=0;i<=10;i++){
//     if (i==7) continue
//     console.log(i)
// }

// /// while
// // 1
// let whileOne = 1
// while (whileOne<=10){
//     console.log(whileOne)
//     whileOne++
// }
// // 2
// let whileTwo=10
// while (whileTwo>=1){
//     console.log(whileTwo)
//     whileTwo--
// }
// // 3
// let whileThree =1
// while (whileThree<=10){
//     if (whileThree%2==1){
//         console.log(whileThree)
//     }
//     whileThree++
// }

/// do...while
// 1

// let totalVal = 0
// let checkk = 0
// let countInputs = 0
// do{
//     countInputs++
//     totalVal+=checkk;
//     console.log(totalVal);
//     checkk=parseInt(prompt("input: "));
// } while (checkk>=0);
// console.log(totalVal/countInputs)

// 2

// let guessMe = Math.floor(Math.random()*10)+1
// let guessed=0
// do{
//     guessed=parseInt(prompt("guess num 1-10"))
//     if (guessMe>guessed) alert("Higher")
//     else if (guessMe<guessed) alert("Lower")
//     else alert ("Guessed right!")
// } while (guessMe!=guessed)

// 1


// let nombre = 0
// while (nombre.toString().length<2){
//     console.log(nombre)
//     nombre++;
// }

// // 2

// nombre = 0
// while (nombre.toString().length<2){
//     console.log(nombre**2)
//     nombre++
// }

// // 3

// nombre = 10
// while (nombre.toString().length==2){
//     console.log(nombre)
//     nombre++
// }

// // 4

// let startNum=parseInt(prompt("start"))
// const endNum=parseInt(prompt("end"))
// while (startNum<=endNum){
//     console.log(startNum)
//     startNum++
// }

// 5

// const numLib=[5,55,555,1,11,111,1111]
// for (let i=0; i < numLib.length;i++){
//     console.log(numLib[i])
// }

// 6

// const nameInput=prompt("your name ")
// let xTimes = parseInt(prompt("how many times to print it? "))
// for (xTimes;xTimes>0;xTimes--){
//     console.log(nameInput)
// }

// 7

// let inputed = parseInt(prompt("number"))
// for (let X=1;X<=10;X++){
//     console.log(inputed*X)
// }

// 8

// for (let x=-10;x<=10;x++){
//     let y = 7*2+5*x-3
//     console.log(y)
// }

// 9

// let total =0
// let cnt = 0
// let n = parseInt(prompt("kiek egluciu"))
// for (n-=1;n>=0;n--){
//     total+=parseInt(prompt("eglutes aukstis"))
//     cnt++
// }
// const avgH=total/cnt
// alert("Vidutinis egluciu aukstis: "+avgH)









////////////             1 Pratybos
// 1

const ArrayInQuestion = [1,2,3,4,5,6,7,8,9,10,100,1000,45]

// for (let i=0;i<ArrayInQuestion.length;i++){
//     console.log(ArrayInQuestion[i])
// }

/// 2


// // first
// let totalSum=0
// for (let i=0;i<ArrayInQuestion.length;i++){
//     totalSum+=ArrayInQuestion[i]
// }
// console.log(totalSum)

// // second

// const gArr = ArrayInQuestion.reduce((ind,el)=>{
//     ind+=el
//     return parseInt(ind)
// }, []);
// console.log(gArr)

// // third

// let summ=0
// ArrayInQuestion.forEach(num => summ=num+summ)
// console.log(summ)

/// 3

// const sentenceArray=['I','tried','to','get','the','pictures','but','theyre','not','ready']
// const evenArray = []
// const oddArray = []
// sentenceArray.reduce((acc,el,index)=>{
//     if (index%2==0) evenArray.push(el)
//     else oddArray.push(el)
// },[]);

// console.log(...evenArray)
// console.log(...oddArray)

/// 4

// const firstArray = Array.from({length:30}, () => Math.floor(Math.random()*999)+1)
// const randomNumberArray = Array.from({length:30}, () => Math.floor(Math.random()*999)+1)

const fourthTaskArray = [10,5,3,12,643,89,45,4,3]
console.log(fourthTaskArray)

// const minVal=Math.min(...fourthTaskArray)


let eliteSniper = fourthTaskArray.indexOf(Math.min(...fourthTaskArray))
fourthTaskArray.splice(eliteSniper+1,3)
// for (let tg=2;tg>=0;tg--){
//     fourthTaskArray.splice(eliteSniper+1,1)
// }
console.log(fourthTaskArray)



// console.log(randomNumberArray)
// for (let tg=2;tg>=0;tg--){
//     randomNumberArray.splice(eliteSniper+1,1)
// }
// console.log(randomNumberArray)





/////////////////////////     2 Pratybos

/// 1

const wordArray = ["one","two","Three","Four","Five","bentley"]
console.log(wordArray)

// function findInsert(choice,arr){
//     if (arr.indexOf(choice)==-1){
//         arr.push(choice)
//         console.log(`${choice} has been added to the array - ${arr}`)
//     }
//     else console.log(`index of ${choice} is: ${arr.indexOf(choice)}`)
// }
// findInsert("bentley",wordArray)
if (wordArray.includes("bentley"))console.log(`includes at `,wordArray.indexOf("bentley"))
else wordArray.push("bentley")
/// 2

const prodArray=["Milk","Spoiled Milk","Cheese","Drill","Saw","Spoiled Milk","Mango","Saw","Bomb","Milk","Spoiled Milk","Cheese","Drill","Saw","Spoiled Milk","Mango","Saw","Bomb"]

const newProd = []

for(let i=0;i<prodArray.length;i++){
    if (newProd.indexOf(prodArray[i])!=-1)continue
    else newProd.push(prodArray[i])
}
console.log(newProd)


/// 3

const fruitArray = ["Banana","Grapefruit","Tomato","Kiwi","Mango","Pineapple","Apple","Orange","Banana","Grapefruit","Tomato","Kiwi","Mango","Pineapple","Apple","Orange","Banana","Grapefruit","Tomato","Kiwi","Mango","Pineapple","Apple","Orange"]

const rareFruitArray = []

for(let i=0;i<fruitArray.length;i++){
    if (rareFruitArray.includes(fruitArray[i]))continue
    else rareFruitArray.push(fruitArray[i])
}
console.log(rareFruitArray)


/// 4


const nameArray = ["jake","yaps","tommy","jessica","alfred","mike","storm"]
const numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,23,214,543,754,86,34,21]
console.log(numberArray)

for(let i=0;i<numberArray.length;i++){
    if (numberArray[i]%2==0){
        numberArray.splice(i,1,nameArray[Math.floor(Math.random()*nameArray.length)])
        numberArray[i]=numberArray[i].toUpperCase()
    }
}
console.log(numberArray)

////////// Pratybos 4

let duomenys = {
    id: "0001",
    type: "donut",
    name: "Cake",
    ppu: 0.55,
    topping: [
        {id: "5001", type: "None"},
        {id: "5002", type: "Glazed"},
        {id: "5003", type: "Sugar"},
        {id: "5004", type: "Powdered Sugar"},
        {id: "5005", type: "Chocolate with sprinkles"},
        {id: "5006", type: "Chocolate"},
        {id: "5007", type: "Maple"},
    ]
}

console.log(duomenys)

console.log(duomenys.topping)

console.log(duomenys.topping[0])
console.log(duomenys.topping[1])

console.log("id:",`${duomenys.topping[0].id}`)
console.log("type:",`${duomenys.topping[0].type}`)
console.log()

///////////////// Pratybos 5

let family = {
    grandparents: {
        grandma: "Marge",
        grandpa: "Homer",
    },
    parents: {
        mom: "Lisa",
        dad: "Millhouse",
    },
    children: {
        daughter: "Anne",
        son1: "Peter",
        son2: "Bob",
    },
};
// console.log("grandparents:",`${family.grandparents.grandma}, ${family.grandparents.grandpa}`)
// console.log(`parents: ${family.parents.mom}, ${family.parents.dad}`)
// console.log(`children: ${family.children.daughter}, ${family.children.son1}, ${family.children.son2}`)

// for (let j=0;j<3;j++){
//     for(let x=0;x<Object.keys(family)[j].length;x++){
//         console.log(`${Object.keys(family)[j]}: ${Object.keys(family)[j][x]}`)
//     }
// }
// console.log(Object.keys(family)[0])
// console.log(family)

for (let element in family) {
    console.log(`${element}: ${Object.values(family[element])}`);
}







let knygos = [
    {
      isbn: 9786098233346,
      price: 7.99,
      year: 2006,
      title: "Bloga dukte",
      pagecount: 250,
    },
    {
      isbn: 9786098233391,
      price: 7.99,
      year: 2015,
      title: "Mergina kuria jis pazinojo",
      pagecount: 315,
    },
    {
      isbn: 9786099609324,
      price: 7.99,
      year: 2019,
      title: "Tapk ragana",
      pagecount: 150,
    },
    {
      isbn: 9786094792250,
      price: 6.99,
      year: 2007,
      title: "Sfera",
      pagecount: 450,
    },
    {
    isbn: 9786094792335,
    price: 9.99,
    year: 2019,
    title: "Mes susitinkame cia",
    pagecount: 500,
    },
    {
    isbn: 9786094273780,
    price: 7.99,
    year: 2019,
    title: "Sunaikinimas",
    pagecount: 509,
    },
    {
    isbn: 9786098233483,
    price: 12.99,
    year: 2018,
    title: "Artemide",
    pagecount: 199,
    },
    {
    isbn: 9786094273872,
    price: 4.99,
    year: 2015,
    title: "Fondas ir imperija",
    pagecount: 185,
    },
    {
    isbn: 9786094273902,
    price: 7.99,
    year: 2019,
    title: "Amzinybes fjordo pranasai",
    pagecount: 333,
    },
    {
    isbn: 9786094442742,
    price: 5.99,
    year: 2004,
    title: "Bejegiai",
    pagecount: 777,
    },
    {
    isbn: 9786094442940,
    price: 14.99,
    year: 2019,
    title: "Klajunai",
    pagecount: 172,
    },
    {
    isbn: 9786090404386,
    price: 7.99,
    year: 2015,
    title: "Mergina, kuri pakliuvo i voratinkli",
    pagecount: 356,
    },
];

const bookArray=[]

for(let i=0;i<knygos.length;i++){
    if (knygos[i].year>2015)bookArray.push(knygos[i].title)
    console.log(`isbn --> ${knygos[i].isbn} `)
    console.log(`price --> ${knygos[i].price} `)
    console.log(`year --> ${knygos[i].year} `)
    console.log(`title --> ${knygos[i].title} `)
    console.log(`pagecount --> ${knygos[i].pagecount} `)
    console.log("------------------------------------------")
}
console.log(bookArray)


////////////////////////




const fam=[30,70,300]
const fam2=Array.from({length:3}, () => Math.floor(Math.random()*800+10))
const tea=[]
for (let i=0;i<3;i++){
    if (fam[i]<50)tea.push(fam[i]*0.2)
    else if (fam[i]>50 && fam[i]<200)tea.push(fam[i]*0.15)
    else tea.push(fam[i]*0.1)
}
console.log(tea)


function summs(zz){
    for (let i=0;i<3;i++){
        const zzz = []
        if (zz<50) zzz.push(zz*0.2)
        else if (zz>50 && zz<200) zzz.push(zz*0.15)
        else zzz.push(zz*0.1)
        return(zzz)
    }
}
console.log(summs(500),summs(5008),summs(50021),summs(121))




















const questions1 = [
    {
      id: 1,
      question: "Kuri HTML versija yra naudojama šiuo metu?",
      answers: [
        { text: 2, isCorrect: false },
        { text: 5, isCorrect: true },
        { text: 7, isCorrect: false },
        { text: 3, isCorrect: false },
        { text: 8.3, isCorrect: false },
      ],
    },
    {
      id: 2,
      question:
        "Kokį HTML semantinį elementą parinktumėte tinklapio naujienai aprašyti?",
      answers: [
        { text: "<news>", isCorrect: false },
        { text: "<article>", isCorrect: true },
        { text: "<section>", isCorrect: false },
        { text: "<main>", isCorrect: false },
        { text: "Nėra teisingo atsakymo", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "Kokią display reikšmę turi HTML a elementas pagal nutylėjimą?",
      answers: [
        { text: "inline", isCorrect: true },
        { text: "block", isCorrect: false },
        { text: "inline-block", isCorrect: false },
        { text: "table", isCorrect: false },
      ],
    },
    // {
    //   id: 4,
    //   question:
    //     "Kuris selektorius yra teisingas norint stilių taikyti tik pdf failams?",
    //   answers: [
    //     { text: "a[href >='.pdf']", isCorrect: false },
    //     { text: "a[href $='.pdf']", isCorrect: false },
    //     { text: "a[href only ='.pdf']", isCorrect: false },
    //     { text: "a[href='.pdf']", isCorrect: true },
    //     { text: "Nėra teisingo atsakymo", isCorrect: false },
    //   ],
    // },
    // {
    //   id: 5,
    //   question:
    //     "Kokią klasę reikia priskirti HTML blokui, kad jis Bootstrap grid'e užimtų 5 stulpelius praleidžiant vieną stulpelį?",
    //   answers: [
    //     { text: ".columns-5-offset-1", isCorrect: false },
    //     { text: ".col-sm5-1", isCorrect: false },
    //     { text: ".col-sm-5 .col-offset-1", isCorrect: false },
    //     { text: ".col-sm-5 .col-sm-offset-1", isCorrect: true }, // ar tikrai?
    //   ],
    // },
    // {
    //   id: 6,
    //   question:
    //     "Kaip kintamajam antraste, kuriam priskirtas HTML elementas header pakeisti fono spalvą naudojant JavaScript?",
    //   answers: [
    //     { text: "antraste.style.background-color = 'tomato';", isCorrect: false },
    //     { text: "antraste.style.backgroundColor = 'tomato';", isCorrect: true },
    //     { text: "antraste.css.background-color= 'tomato';", isCorrect: false },
    //     { text: "Teisingo atsakymo nėra", isCorrect: false },
    //   ],
    // },
    // {
    //   id: 7,
    //   question: "Kaip importuoti išorinį scss failą į pagrindinį scss failą?",
    //   answers: [
    //     { text: "@include isorinis_failas", isCorrect: false },
    //     { text: "@add isorinis_failas", isCorrect: false },
    //     { text: "@import isorinis_failas", isCorrect: true },
    //     { text: "Nėra teisingo varianto", isCorrect: false },
    //   ],
    // },
    // {
    //   id: 8,
    //   question:
    //     "Kaip padaryt nuorodą į tėvinį html elementą a su tikslu aprašyti pseudo klasės :hover formatavimą?",
    //   answers: [
    //     { text: "extend a:hover", isCorrect: false },
    //     { text: "into a:hover", isCorrect: false },
    //     { text: "&:hover", isCorrect: true },
    //     { text: "@:hover", isCorrect: false },
    //   ],
    // },
    // {
    //   id: 9,
    //   question: "Kuris iš sąrašo nėra preprocesorius?",
    //   answers: [
    //     { text: "Ruby", isCorrect: true },
    //     { text: "SASS", isCorrect: false },
    //     { text: "LESS", isCorrect: false },
    //     { text: "Stylus", isCorrect: false },
    //     { text: "Nėra teisingo varianto", isCorrect: false },
    //   ],
    // },
    // {
    //   id: 10,
    //   question:
    //     "Kaip pasirinkti header elementą ir jį paslėpti naudojant jQuery?",
    //   answers: [
    //     { text: "$('header').diplayNone();", isCorrect: false }, //nezinau
    //     { text: "$('header').hide();", isCorrect: true },
    //     { text: "$('header').hideIt();", isCorrect: false },
    //     { text: "Nėra teisingo atsakymo.", isCorrect: false },
    //   ],
    // },
    // {
    //   id: 11,
    //   question: "Kokią template sistemą naudoja Drupal 8?",
    //   answers: [
    //     { text: "HTML", isCorrect: false },
    //     { text: "Smarty", isCorrect: false },
    //     { text: "Twig", isCorrect: true },
    //     { text: "PHP", isCorrect: false },
    //     { text: "Nėra teisingo varianto", isCorrect: false },
    //   ],
    // },
    // {
    //   id: 12,
    //   question: "Kuo skiriasi kintamieji let nuo var ?",
    //   answers: [
    //     { text: "Nesiskiria", isCorrect: false },
    //     {
    //       text: "Var yra globalus kintamasis naudojamas visoje funkcijoje, o let yra vietinis kintamasis, naudojamas blokuose",
    //       isCorrect: true,
    //     },
    //     {
    //       text: "Var kintamasis yra skirtas tik tekstiniams kintamiesiams aprašyti, o let numerių kintamiesiems",
    //       isCorrect: false,
    //     },
    //     {
    //       text: "Var naudojamas tuomet kai kintamojo ilgis ne didesnis nei 5 simboliai, o let, kuomet daugiau nei 5",
    //       isCorrect: false,
    //     },
    //     { text: "Nėra teisingo atsakymo", isCorrect: false },
    //   ],
    // },
    // {
    //   id: 13,
    //   question: "Kam naudojamas 'use strict'?",
    //   answers: [
    //     {
    //       text: "‘Use strict’ naudojimas apsaugo neleisdamas atlikti tam tikrų veiksmų ir suteikia daugiau išimčių",
    //       isCorrect: false,
    //     },
    //     {
    //       text: "Užkerta kelią klaidoms kai atliekami palyginti “nesaugūs” veiksami",
    //       isCorrect: false,
    //     },
    //     {
    //       text: "Išjungia painias ir blogai apgalvotas funkcijas",
    //       isCorrect: false,
    //     },
    //     { text: "Visi atsakymai tesisingi", isCorrect: true },
    //     { text: "Nėra teisingo atsakymo", isCorrect: false },
    //   ],
    // },
    // {
    //   id: 14,
    //   question: "Kodėl CSS vadinami pakopiniais stiliais?",
    //   answers: [
    //     { text: "Kodas rašomas pakopomis", isCorrect: false },
    //     {
    //       text: "Pakopos nusako, kuri taisyklė yra svarbesnė ir bus taikoma elementui",
    //       isCorrect: true,
    //     },
    //     {
    //       text: "Įjungus CSS pakopas, galima naudoti !important",
    //       isCorrect: false,
    //     },
    //     { text: "Teisingo atsakymo nėra", isCorrect: false },
    //   ],
    // },
    // {
    //   id: 15,
    //   question: "Koks metodas naudojamas, norint sužinoti masyvo ilgį JS?",
    //   answers: [
    //     { text: "count", isCorrect: false },
    //     { text: "length", isCorrect: true },
    //     { text: "valueOf", isCorrect: false },
    //     { text: "Nėra teisingo atsakymo", isCorrect: false },
    //   ],
    // },
    // {
    //   id: 16,
    //   question: "Kiek laiko duomenys saugomi local storage?",
    //   answers: [
    //     { text: "Iki perkraunant puslapį", isCorrect: false },
    //     { text: "Vieną parą", isCorrect: false },
    //     { text: "Vieną mėnesį", isCorrect: false },
    //     { text: "Metus laiko", isCorrect: false },
    //     { text: "Neturi galiojimo laiko", isCorrect: true },
    //   ],
    // },
    // {
    //   id: 17,
    //   question:
    //     "let kiekis = 12; \n" +
    //     "console.log(++kiekis); \n" +
    //     "Ką išves konsolėje?",
    //   answers: [
    //     { text: "undefined", isCorrect: false },
    //     { text: "12", isCorrect: false },
    //     { text: "13", isCorrect: true },
    //     { text: "Nieko", isCorrect: false },
    //   ],
    // },
    // {
    //   id: 18,
    //   question: "Koks metodas naudojamas eilutės duomenis konvertuoti į masyvą?",
    //   answers: [
    //     { text: "shift()", isCorrect: false },
    //     { text: "pop()", isCorrect: false },
    //     { text: "splice()", isCorrect: false },
    //     { text: "split()", isCorrect: true },
    //   ],
    // },
    // {
    //   id: 19,
    //   question:
    //     "function sveikas(){ \n" +
    //     ' let vardas="Jonas" \n' +
    //     "console.log(vardas)\n" +
    //     "} \n" +
    //     "sveikas();\n" +
    //     "Ką atspausdins konsolėje?",
    //   answers: [
    //     { text: "Jonas", isCorrect: true },
    //     { text: "vardas", isCorrect: false },
    //     { text: "sveikas", isCorrect: false },
    //     { text: "undefined", isCorrect: false },
    //     { text: "nieko", isCorrect: false },
    //   ],
    // },
    // {
    //   id: 20,
    //   question: "Kaip apibrėžiamas SASS kintamasis vardu spalva?",
    //   answers: [
    //     { text: "const sass spalva;", isCorrect: false },
    //     { text: "const spalva;", isCorrect: false },
    //     { text: "let spalva;", isCorrect: false },
    //     { text: "$spalva string", isCorrect: false },
    //     { text: "$spalva", isCorrect: true },
    //   ],
    // },
  ];
  




for (let i=0;i<questions1.length;i++){
    console.log(questions1[i].question)
    for (let x=0;x<questions1[i].answers.length;x++){
        if (questions1[i].answers[x].isCorrect)console.log(questions1[i].answers[x].text)
    }
    console.log("------------------")
}




///////// Viktorina

let points = 0
let possibleAnswers = ""
let answerArray =[]

// for (let i=0;i<questions1.length;i++){
//     possibleAnswers = ""
//     for (let w=0;w<questions1[i].answers.length;w++){
//         possibleAnswers += "\n"+(w+1)+"  "+questions1[i].answers[w].text
//     }
//     let answer=parseInt(prompt(`${i+1}  ${questions1[i].question},${possibleAnswers}`))-1
//     if (answer>questions1[i].answers.length-1 || answer<0 || isNaN(answer)){
//         i--
//         alert("Blogas ivedimas, kartokite")
//         continue
//     }
//     else{
//         if (questions1[i].answers[answer].isCorrect) alert("Teisingai!"),points++
//         else alert("Neteisingai")
//     }
// }
// if (questions1.length/points<=2)alert(`Sveikiname! Is ${questions1.length} klausimu teisingai atsakete i ${points}!`)

//////////////





//Array.from({ length: 5 }, (_, index) => index * index)


// const promptAnswers=Array.from({length:(questions1[2].answers.length)}, (_,i) => i)
// console.log(promptAnswers)
// while (promptAnswers.length>0){
//   // let z=0
//   console.log(promptAnswers.splice(Math.floor(Math.random()*promptAnswers.length-z),1))
  // z++
  // console.log(promptAnswers)
  // console.log(Math.floor(Math.random()*promptAnswers.length))
// }
// const promptAnswers=Array.from({length:(questions1[i].answers.length)}, (_,l) => l)
// while (promptAnswers.length>0)promptAnswers.splice(Math.floor(Math.random()*promptAnswers.length),1)

// const promptAnswers=Array.from({}, () =>

// const questionArray = Array.from({length:(questions1.length)}, (_,l) => l)
// console.log(questionArray)
// questionPick=questionArray.splice(Math.floor(Math.random()*questionArray.length),1)

// for (let i=0;i<questions1.length;i++){
//     possibleAnswers = ""
//     answerArray=[]
//     let questionPick = 0
//     const questionArray = Array.from({length:(questions1.length)}, (_,l) => l)
//     questionPick=questionArray.splice(Math.floor(Math.random()*questionArray.length),1)
//     const promptAnswers=Array.from({length:(questions1[questionPick].answers.length)}, (_,l) => l)

//     for (let w=0;w<questions1[questionPick].answers.length;w++){

//         let answerPick = 0
//         answerPick=promptAnswers.splice(Math.floor(Math.random()*promptAnswers.length),1)
//         answerArray.push(questions1[questionPick].answers[answerPick].isCorrect)
//         console.log(answerArray)
//         possibleAnswers += "\n"+(w+1)+"  "+questions1[questionPick].answers[answerPick].text
//     }

//     let answer=parseInt(prompt(`${i+1}  ${questions1[questionPick].question},${possibleAnswers}`))-1

//     if (answer>questions1[questionPick].answers.length-1 || answer<0 || isNaN(answer)){
//         i--
//         alert("Blogas ivedimas, kartokite")
//         continue
//     }

//     else{
//         if (answerArray[answer]) alert("Teisingai!"),points++
//         else alert("Neteisingai")
//     }
// }
// if (questions1.length/points<=2)alert(`Sveikiname! Is ${questions1.length} klausimu teisingai atsakete i ${points}!`)



let textt = "Jonas"
localStorage.setItem("text",textt)
let textt2 = "Petras"
localStorage.setItem("text",textt2)

let nm = 3
localStorage.setItem("number",nm)

let txet = localStorage.getItem(textt)
console.log(typeof txet)

const arrgh = ["TOmas","Linas","Domas"]
localStorage.setItem("arr1",arrgh)
console.log(typeof localStorage.getItem("arr1"))

let parsedData=localStorage.getItem("arr1")
console.log(parsedData)

localStorage.setItem("familija", JSON.stringify(family))
let fromLS=JSON.parse(localStorage.getItem("familija"))
console.log(fromLS)
console.log(localStorage.getItem("familija"))

localStorage.removeItem("number")
// localStorage.clear()