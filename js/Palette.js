class Palette{
  constructor(size, border, display, paletteGrid){
    this._element = document.createElement('div');
    this._element.style.border = border;
    this._element.style.display = display;

    for (var i = 1 ; i <= 20; i++){
      var rows = document.createElement('div');
      paletteGrid._element.appendChild(rows);

      for (var j = 1 ; j <= 20; j++){
      var pixels = document.createElement('div');
      pixels.style.height = `${size}px`;
      pixels.style.width = `${size}px`;
      pixels.className = "pixelsClass";
      pixels.style.backgroundColor = "white";
      rows.appendChild(pixels);
      }
    }
  }

  get element() {
    return this._element;
  }
}

class Colors{
  constructor(size, border, display, colorContainer){
    this._element = document.createElement('div');
    this._element.style.border = border;
    this._element.style.display = display;

    for (var i = 1 ; i <= 10; i++){
      var rows_colorSwatch = document.createElement('div');
      colorContainer._element.appendChild(rows_colorSwatch);

      for (var j = 1 ; j <= 6; j++){
        var uniqueColors = document.createElement('div');
        var randnumb1 = Math.floor(Math.random() * 255);
        var randnumb2 = Math.floor(Math.random() * 255);
        var randnumb3 = Math.floor(Math.random() * 255);
        uniqueColors.style.backgroundColor = "rgb(" + (255 - randnumb1) + "," + (255 - randnumb2)  + "," + (255 - randnumb3) +")";
        rows_colorSwatch.appendChild(uniqueColors);
      }
    }
  }

  get element() {
    return this._element;
  }
}

