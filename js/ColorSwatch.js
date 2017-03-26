var colorCache;
var pixelPainter = document.querySelector("#pixelPainter");
var colorSwatch = document.createElement('div');


// container containing color swatch and commands buttons

var swatchCommandContainer = document.createElement('div');

swatchCommandContainer.id = "swatchCommandContainer";
swatchCommandContainer.style.height = "600px";
swatchCommandContainer.style.width = "200px";
swatchCommandContainer.style.border = "10px solid orange";

pixelPainter.appendChild(swatchCommandContainer);


// Color swatch creation

colorSwatch.id = "main_color_swatch";
colorSwatch.style.height = "300px";
colorSwatch.style.width = "150px";
colorSwatch.style.border = "10px solid red";

swatchCommandContainer.appendChild(colorSwatch);


// Rows creations (one div per row)
for (var i = 1 ; i <= 10; i++){
  var rows_colorSwatch = document.createElement('div');
  colorSwatch.appendChild(rows_colorSwatch);


// Colums creation (each j will create a child to a i). Each one will have a color varying with i and j
    for (var j = 1 ; j <= 6; j++){
      var uniqueColors = document.createElement('div');
      var randnumb1 = Math.floor(Math.random() * 255);
      var randnumb2 = Math.floor(Math.random() * 255);
      var randnumb3 = Math.floor(Math.random() * 255);

      uniqueColors.id = "rowc" + i + "colc" + j;
      uniqueColors.style.height = "30px";
      uniqueColors.style.width = "23px";
      uniqueColors.style.border = "1px solid black";
      uniqueColors.style.display = "table-cell";
      uniqueColors.style.background = "rgb(" + (255 - randnumb1) + "," + (255 - randnumb2)  + "," + (255 - randnumb3) +")";
      rows_colorSwatch.appendChild(uniqueColors);

      uniqueColors.addEventListener('click', function() {
        colorCache = this.style.background;
      });

    }
}

// Main pixel panels creation

var pixelPainter = document.querySelector("#pixelPainter");
var palette = document.createElement('div');

palette.id = "main_palette";
palette.style.height = "600px";
palette.style.width = "600px";
palette.style.border = "10px solid green";

pixelPainter.appendChild(palette);

// Rows creations (one div per row)
for (var i = 1 ; i <= 20; i++){
  var rows = document.createElement('div');
  palette.appendChild(rows);


// Colums creation (each j will create a child to a i)
    for (var j = 1 ; j <= 20; j++){
      var pixels = document.createElement('div');
      pixels.className = "pixelsClass";
      pixels.id = "row" + i + "col" + j;
      pixels.style.height = "30px";
      pixels.style.width = "28px";
      pixels.style.border = "1px solid black";
      pixels.style.display = "table-cell";
      rows.appendChild(pixels);

      pixels.addEventListener('click', function() {
        this.style.backgroundColor = colorCache;
      });

      var mousedown = false;
      document.onmousedown = function(){
        mousedown = true;
      };
      document.onmouseup = function(){
        mousedown = false;
      };

      pixels.addEventListener('mouseover', function(){
        if(mousedown === true){
          this.style.backgroundColor = colorCache;
          console.log(mousedown);
        }
      });
  }

}

// command buttons creation

var clearButton = document.createElement('button');
clearButton.id = "clear";
clearButton.style.height = "50px";
clearButton.style.width = "160px";
clearButton.style.border = "3px solid black";
clearButton.innerHTML = "CLEAR";

swatchCommandContainer.appendChild(clearButton);

var backgroundpanel = document.getElementsByClassName("pixelsClass");


clear.addEventListener('click', function() {
  for (var i = 0; i < backgroundpanel.length; i++) {
    backgroundpanel[i].style.backgroundColor = "white";
  }
});


var eraseButton = document.createElement('button');
eraseButton.id = "erase";
eraseButton.style.height = "50px";
eraseButton.style.width = "160px";
eraseButton.style.border = "3px solid black";
eraseButton.innerHTML = "ERASE";

swatchCommandContainer.appendChild(eraseButton);



erase.addEventListener('click', function() {
  colorCache = "rgb(255,255,255)";
});


// for (var i = 1 ; i <= 20; i++){
//   for (var j = 1 ; j <= 20; j++){
//     row i col j.addEventListener('drag', function() {

//       if ((this.getBoundingClientRect().left <= event.clientX <= this.getBoundingClientRect().right) || (this.getBoundingClientRect().bottom <= event.clientY <= this.getBoundingClientRect().top))

// console.log(event.clientX);
// console.log(event.clientY);
// console.log(this.getBoundingClientRect().left);
// console.log(this.getBoundingClientRect().right);
// console.log(this.getBoundingClientRect().top);
// console.log(this.getBoundingClientRect().bottom);
// });
