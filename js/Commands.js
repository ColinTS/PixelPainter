'use strict';
// command buttons creation

class Commands{

  constructor(id, width, height){
    this._element = document.createElement('button');
    this._element.id = id;
    this._element.style.width = String(width);
    this._element.style.height = String(height);
    this._element.style.border = "3px solid black";
    this._element.innerHTML = id;
  }

  get element() {
    return this._element;
  }
}




// clear.addEventListener('click', function() {
//   for (var i = 0; i < backgroundpanel.length; i++) {
//     backgroundpanel[i].style.backgroundColor = "white";
//   }
// });

// //erase
// var eraseButton = document.createElement('button');
// eraseButton.id = "erase";
// eraseButton.style.height = "50px";
// eraseButton.style.width = "160px";
// eraseButton.style.border = "3px solid black";
// eraseButton.innerHTML = "ERASE";

// swatchCommandContainer.appendChild(eraseButton);



// erase.addEventListener('click', function() {
//   colorCache = "rgb(255,255,255)";
// });


