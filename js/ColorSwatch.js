

var colorCache;

// color swatch creation

var pixelPainter = document.querySelector("#pixelPainter");
var colorSwatch = document.createElement('div');
var swatchCommandContainer = document.createElement('div');

swatchCommandContainer.id = "swatchCommandContainer";
swatchCommandContainer.style.height = "600px";
swatchCommandContainer.style.width = "200px";
swatchCommandContainer.style.border = "10px solid orange";

pixelPainter.appendChild(swatchCommandContainer);




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
      uniqueColors.id = "rowc" + i + "colc" + j;
      uniqueColors.style.height = "30px";
      uniqueColors.style.width = "23px";
      uniqueColors.style.border = "1px solid black";
      uniqueColors.style.display = "table-cell";
      uniqueColors.style.background = "rgb(" + (255) + "," + (255 - 25*i/j)  + "," + (250 - 40) +")";
      rows_colorSwatch.appendChild(uniqueColors);

      uniqueColors.addEventListener('click', function() {
        console.log('boom');
        colorCache = this.style.background;
        console.log(colorCache);
      });
    }
}


'use strict';

// Color Swatch creation

var pixelPainter = document.querySelector("#pixelPainter");
var palette = document.createElement('div');

palette.id = "main_palette";
palette.style.height = "600px";
palette.style.width = "600px";
palette.style.border = "10px solid green";

pixelPainter.appendChild(palette);

// Rows creations (one div per row)
for (var i = 1 ; i <= 60; i++){
  var rows = document.createElement('div');
  palette.appendChild(rows);

// Colums creation (each j will create a child to a i)
    for (var j = 1 ; j <= 60; j++){
      var pixels = document.createElement('div');
      pixels.id = "row" + i + "col" + j;
      pixels.style.height = "10px";
      pixels.style.width = "8px";
      pixels.style.border = "1px solid black";
      pixels.style.display = "table-cell";
      rows.appendChild(pixels);

      pixels.addEventListener('click', function() {
        console.log('pal');
        this.style.backgroundColor = colorCache;
        console.log(colorCache);
      });
  }

}

