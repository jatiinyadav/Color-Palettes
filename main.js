window.onload = function () {
  addColor();
};

// BUTTON
for (let i = 1; i <= 25; i++) {
  const box = document.createElement("div");
  
  box.classList.add("box");
  document.querySelector(".container").appendChild(box);
}

const btn = document.querySelector(".btn");
const randomColorBlock = document.querySelectorAll(".box");


function RandomHexColorCode() {
  var chars = "0123456789abcdef";
  var colorlength = 6;
  var color = "";

  for (var i = 0; i < colorlength; i++) {
    var randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }

  return "#" + color;
}

function addColor() {
  randomColorBlock.forEach((e) => {
    var newColor = RandomHexColorCode();
    e.style.backgroundColor = newColor;
    e.innerHTML = newColor;

    // Get the element you want to add hover styles to
    // Add a 'mouseenter' event listener to add the 'hovered' class when the mouse enters
    e.addEventListener('mouseenter', () => {
      // console.log('hovered');
    e.innerHTML="copy";
    });
    // Add a 'mouseleave' event listener to remove the 'hovered' class when the mouse leaves
    e.addEventListener('mouseleave', () => {
      // console.log('nothovered');
      e.innerHTML=newColor;
    });

    e.addEventListener('click',()=>{
      navigator.clipboard.writeText(newColor);
    });

    
  });
}
