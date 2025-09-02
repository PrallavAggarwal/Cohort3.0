// console.log("i am here.");
let wrapper = document.getElementById("wrapper");
let orange = document.getElementById("orange");
let green = document.getElementById("green");
let purple = document.getElementById("purple");
let blue = document.getElementById("blue");
let color = document.querySelectorAll(".color");
let color_picker = document.querySelector("#color-picker");

color.forEach(element => {
  element.addEventListener("click", (e) => {
    let style = window.getComputedStyle(e.target);
    console.log(e.target.id);
    console.log(element);
    console.log(style);
    console.log(style.getPropertyValue("background-color"));
    let bgColor = e.target.id == "color-picker" ? e.target.value : style.getPropertyValue("background-color");
    wrapper.style.backgroundColor = bgColor;
  })
})
