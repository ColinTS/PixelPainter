var pixelPainter = document.querySelector("#pixelPainter");

//Creates the main palette
var paletteGrid = new GridContainer("main_palette",600,600,"10px solid green");
pixelPainter.appendChild(paletteGrid.element);


//Create swatch command container
var swatchContainer = new GridContainer("swatchCommandContainer",200,600, "10px solid orange");
pixelPainter.appendChild(swatchContainer.element);

//Create color container
var colorContainer = new GridContainer("main_color_swatch",150,300,"10px solid red");
swatchCommandContainer.appendChild(colorContainer.element);

//Append pixels to palette
var pixelGenerator = new Palette(30, "1px solid black", "table-cell", paletteGrid);
main_color_swatch.appendChild(pixelGenerator.element);

//Append colors to grid
var colorGenerator = new Colors(30, "1px solid black", "table-cell", colorContainer);
main_color_swatch.appendChild(colorGenerator.element);
