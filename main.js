let block = document.querySelector(".block");
let imgs = document.querySelectorAll(".img-block__img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let counter = 0;
next.addEventListener("click", nextImg);
function nextImg() {
  imgs[counter].classList.remove("img-block__img-show");
  counter++;
  if (counter === imgs.length) {
    counter = 0;
  }
  imgs[counter].classList.add("img-block__img-show");
}
prev.addEventListener("click", prevImg);
function prevImg() {
  imgs[counter].classList.remove("img-block__img-show");
  counter--;
  if (counter < 0) {
    counter = imgs.length - 1;
  }
  imgs[counter].classList.add("img-block__img-show");
}
setInterval(() => {
  prevImg();
}, 2000);
block.addEventListener("mouseout", () => {
  interval = setInterval(() => {
    prevImg();
  }, 2000);
});
block.addEventListener("mouseover", () => {
  clearInterval(interval);
});
