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
  randomColorBlock.forEach((event) => {
    var newColor = RandomHexColorCode();
    event.style.backgroundColor = newColor;
    event.innerHTML = newColor;

    // Get the element you want to add hover styles to
    // Add a 'mouseenter' event listener to add the 'hovered' class when the mouse enters
    event.addEventListener('mouseenter', () => {
      // console.log('hovered');
    event.innerHTML="copy";
    });
    // Add a 'mouseleave' event listener to remove the 'hovered' class when the mouse leaves
    event.addEventListener('mouseleave', () => {
      // console.log('nothovered');
      event.innerHTML=newColor;
    });

    event.addEventListener('click', () => {
      navigator.clipboard.writeText(newColor)
      showCopyPopup(newColor);
    });
  });
}
//function to show copy colorcode popup
function showCopyPopup(color) {
  const copyPopup = document.getElementById('copy-popup');
  const copiedColor = document.getElementById('copied-color');

  copiedColor.textContent = color;
  copyPopup.classList.add('show');

  setTimeout(() => {
    copyPopup.classList.remove('show');
  }, 2000);
}