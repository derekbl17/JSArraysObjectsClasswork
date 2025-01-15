class Reader {
  constructor(vardas, pavarde, korteles_nr, paimta_knyga) {
    this._vardas = vardas;
    this._pavarde = pavarde;
    this._korteles_nr = korteles_nr;
    this._paimta_knyga = [paimta_knyga];
  }
  get firstName() {
    return this._vardas;
  }
  get lastName() {
    return this._pavarde;
  }
  get cardNr() {
    return this._korteles_nr;
  }
  get bookName() {
    return this._paimta_knyga;
  }
  printInfo() {
    for (let i in this) {
      console.log(`${this[i]}`);
    }
  }
  addBook(newBook) {
    this._paimta_knyga.push(newBook);
  }
}
const lsArray = JSON.parse(localStorage.getItem("readers")) || [];

console.log(lsArray);
const formSubmit = document.getElementById("formSubButton");
const firstNameVal = document.getElementById("firstName");
const lastNameVal = document.getElementById("lastName");
const cardNrVal = document.getElementById("cardNr");
const bookNameVal = document.getElementById("bookName");
const tableBody = document.getElementById("tBody");
const cardNrArray = [];

const people = JSON.parse(localStorage.getItem("readers")) || [];
console.log(people);
for (let i = 0; i < people.length; i++) {
  if (people[i]) {
    cardNrArray.push(i);
  }
}
console.log(cardNrArray);
console.log(cardNrArray.includes(3));
formSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(document.getElementsByTagName("input"));
  if (
    (firstNameVal.value, lastNameVal.value, cardNrVal.value, bookNameVal.value)
  ) {
    if (cardNrArray.includes(+cardNrVal.value)) {
      if (people[cardNrVal.value].bookName.includes(bookNameVal.value)) {
        alert("Knyga jau irasyta!");
      } else {
        console.log(people[people.indexOf(cardNrVal.value)]);
        console.log("includes");
        const insertTo = document.getElementById(cardNrVal.value);
        people[cardNrVal.value].addBook(bookNameVal.value);
        const insertOption = document.createElement("option");
        insertOption.innerText = bookNameVal.value;
        insertTo.append(insertOption);
        people[cardNrVal.value].printInfo();
      }
    } else {
      people[cardNrVal.value] = new Reader(
        firstNameVal.value,
        lastNameVal.value,
        cardNrVal.value,
        bookNameVal.value
      );
      //
      localStorage.setItem("readers", JSON.stringify(people));
      //
      people[cardNrVal.value].printInfo();
      cardNrArray.push(cardNrVal.value);
      let tableRow = document.createElement("tr");
      let trId = Date.now() + Math.random();
      tableRow.id = trId;
      const nameTd = document.createElement("td");
      const lastNameTd = document.createElement("td");
      const cardNrTd = document.createElement("td");
      const bookNameTd = document.createElement("td");
      const bookNameTdSelect = document.createElement("select");
      const bookNameOption = document.createElement("option");
      bookNameTdSelect.id = cardNrVal.value;
      bookNameTdSelect.append(bookNameOption);
      bookNameTd.append(bookNameTdSelect);
      bookNameOption.innerText = `${people[cardNrVal.value].bookName}`;
      nameTd.innerText = `${people[cardNrVal.value].firstName}`;
      lastNameTd.innerText = `${people[cardNrVal.value].lastName}`;
      cardNrTd.innerText = `${people[cardNrVal.value].cardNr}`;
      tableRow.append(nameTd, lastNameTd, cardNrTd, bookNameTd);
      let tdRm = document.createElement("td");
      tdRm.innerHTML = `<button id="remover">PANAIKINTI</button>`;
      tableBody.append(tableRow);
      tableRow.append(tdRm);
      alert("Vartotojas sekmingai sukurtas");
      tdRm.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.getElementById(`${trId}`);
        target.remove();
        console.log(cardNrArray.indexOf(cardNrVal.value));
        cardNrArray.splice(cardNrArray.indexOf(cardNrVal.value), 1);
        console.log(cardNrArray.indexOf(cardNrVal.value));
      });
      for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
        document.getElementsByTagName("input")[i].value = "";
      }
    }
  } else {
    alert("Klaidingas ivedimas");
    console.log(
      firstNameVal.value,
      lastNameVal.value,
      cardNrVal.value,
      bookNameVal.value
    );
  }
});
