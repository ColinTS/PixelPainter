'use strict';

// Main palette creation and styling

var body = document.querySelector("body");
var palette = document.createElement('div');

palette.id = "palette";
palette.style.height = "600px";
palette.style.width = "600px";
palette.style.border = "10px solid green";

body.appendChild(palette);

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
  }
}

