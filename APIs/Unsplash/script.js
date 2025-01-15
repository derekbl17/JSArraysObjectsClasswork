const api = "ge9t4wX2zg41URvc-QQ3y846atY6AfkUOPpsScdOBJY";

// 20 rand images
// https://api.unsplash.com/photos/random?client_id=${api}&count=20&page=2
const galleryContainer = document.getElementById("mainGala");
const button = document.getElementById("search-button");
const input = document.getElementById("input");

function imageCards(returned) {
  galleryContainer.innerHTML = "";

  if (input.value) {
    for (let i = 0; i < returned.results.length; i++) {
      const card = document.createElement("div");
      card.className = "imgCard";
      const image = document.createElement("img");
      image.src = `${returned["results"][i].urls.small}`;
      image.alt = `${returned.results[i].alt_description}`;
      console.log(`${returned["results"][i].urls.small}`);
      console.log(`${returned.results[i].alt_description}`);
      card.append(image);
      galleryContainer.append(card);
    }
  } else {
    for (let i = 0; i < returned.length; i++) {
      const card = document.createElement("div");
      card.className = "imgCard";
      const image = document.createElement("img");
      image.src = `${returned[i].urls.small}`;
      image.alt = `${returned[i].alt_description}`;
      card.append(image);
      galleryContainer.append(card);
    }
  }
}

const images = async (photoType = "random") => {
  let fetchUrl = `https://api.unsplash.com/photos/${photoType}?client_id=${api}&count=20`;
  if (input.value) {
    fetchUrl = `https://api.unsplash.com/search/photos?page=1&query=${photoType}&client_id=${api}&count=20`;
  }
  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    console.log(data);
    if (input.value && data.results.length === 0) {
      alert("no images");
    } else {
      imageCards(data);
    }
  } catch (error) {
    console.error(error);
    alert(error);
  }
};

images();

button.addEventListener("click", (event) => {
  event.preventDefault();
  return input.value ? images(input.value) : alert("input cant be empty");
});
