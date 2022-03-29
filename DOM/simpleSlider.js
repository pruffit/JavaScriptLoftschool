const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const slider = document.querySelector("#slider");
const computedStyles = getComputedStyle(slider);
const items = document.querySelectorAll(".item");

const minRight = -390;
const step = 130;
const preShownItems = 360 / step;
const maxRight = (items.length - preShownItems) * step - 508;
let currentRight = -390;
slider.style.right = currentRight;
prev.addEventListener("click", (e) => {
    e.preventDefault();
    if(currentRight > minRight){
        currentRight -= step;
        slider.style.right = `${currentRight}px`;
    }
});
next.addEventListener("click", (e) => {
    e.preventDefault();
    if(currentRight < maxRight){
        currentRight += step;
        slider.style.right = `${currentRight}px`;
    }
});