const images = [
  "background-img-01.jpg",
  "background-img-02.jpg",
  "background-img-03.jpg"
];
const chosenImages = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `images/${chosenImages}`;

document.body.appendChild(bgImage);