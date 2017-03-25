'use strict';

// color swatch creation

var pixelPainter = document.querySelector("#pixelPainter");

var clearButton = document.createElement('button');
clearButton.id = "clear";
clearButton.style.height = "50px";
clearButton.style.width = "200px";
clearButton.style.border = "10px solid black";
clearButton.innerHTML = "CLEAR";

swatchCommandContainer.appendChild(clearButton);

var eraseButton = document.createElement('button');
eraseButton.id = "clear";
eraseButton.style.height = "50px";
eraseButton.style.width = "200px";
eraseButton.style.border = "10px solid black";
eraseButton.innerHTML = "ERASE";

swatchCommandContainer.appendChild(eraseButton);

