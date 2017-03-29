var pixelPainter = document.querySelector("#pixelPainter");

//Creates the main palette
var paletteGrid = new GridContainer("main_palette",600,600,"10px solid green");
pixelPainter.appendChild(paletteGrid.element);

//Create swatch command container
var swatchContainer = new GridContainer("swatchCommandContainer",200,600, "10px solid orange");
pixelPainter.appendChild(swatchContainer.element);

//Create color container
var colorContainer = new GridContainer("main_color_swatch",150,300,"10px solid red");
swatchContainer.element.appendChild(colorContainer.element);

//Append colors to grid
var colorGenerator = new Colors(25, "1px solid black", "table-cell", colorContainer);
colorContainer.element.appendChild(colorGenerator.element);

//Create Clear button
var clearButton = new Commands("Clear", 150, 60);
swatchContainer.element.appendChild(clearButton.element);

//Create Erase Button
var eraseButton = new Commands("Erase", 150, 60);
swatchContainer.element.appendChild(eraseButton.element);

//Append pixels to palette
var pixelGenerator = new Palette(30, "1px solid black", "table-cell", paletteGrid, colorGenerator);
paletteGrid.element.appendChild(pixelGenerator.element);


