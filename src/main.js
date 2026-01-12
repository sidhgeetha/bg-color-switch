const colourDivs = document.querySelectorAll("#coloursDiv div");
document.body.backgroundColor = "ffffff";

// Loop divs
colourDivs.forEach((div) => {
  
  const color = div.style.backgroundColor ;

  // Add click event
  div.addEventListener("click", () => {
   const color = window.getComputedStyle(div).backgroundColor;
    document.body.style.backgroundColor = color;
  });
});


// const colors = ["#f87171", "#60a5fa", "#34d399", "#fbbf24", "#a78bfa"];

const randomBtnEl = document.getElementById("random");

randomBtnEl.addEventListener("click", () => {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = color;
});

// dark theme 

const toggleEl = document.getElementById("toggle");
const moonEl =document.getElementById("moon");
const sunEl = document.getElementById("sun");


moonEl.addEventListener("click" ,() =>{
  document.body.style.backgroundColor = "#111827";
  document.body.style.color = "white";
})

sunEl.addEventListener("click" , () =>{
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
})















// const colors = ["#f87171", "#60a5fa", "#34d399", "#fbbf24", "#a78bfa"];
// const container = document.getElementById("colorButtons");
// document.body.style.backgroundColor = "#ffffff";

// colors.forEach((color) => {
//   const btn = document.createElement("button");

//   btn.className = "w-10 h-10 rounded-full border";
//   btn.style.backgroundColor = color;

//   btn.addEventListener("click", () => {
//     document.body.style.backgroundColor = color;
//   });

//   container.appendChild(btn);
// });

