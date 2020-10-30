// Animation
const container = document.querySelector('.container');
const card = document.querySelector('.card');
// Animate items
const title = document.querySelector('.title');
const adidas = document.querySelector('.adidas img');
const buy = document.querySelector('.buy button');
const info = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Animation Events
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
  card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //popout
title.style.transform = "translateZ(150px)";
adidas.style.transform = "translateZ(150px) rotate(-5deg";
buy.style.transform = "translateZ(100px)";
info.style.transform = "translateZ(100px)";
sizes.style.transform = "translateZ(75px)";
});

//Animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // popback
title.style.transform = "translateZ(0px)";
adidas.style.transform = "translateZ(0px) rotate(0deg)";
buy.style.transform = "translateZ(0px)";
info.style.transform = "translateZ(0px)";
sizes.style.transform = "translateZ(0px)";
});




