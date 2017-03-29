class Colors{

  constructor(size, border, display, colorContainer){
    this._element = document.createElement('div');
    this._element.style.border = border;
    this._element.style.display = display;
    this._colorCache;
    this.setColor = this.setColor.bind(this);

    for (var i = 1 ; i <= 10; i++){
      var rows_colorSwatch = document.createElement('div');
      colorContainer._element.appendChild(rows_colorSwatch);

      for (var j = 1 ; j <= 6; j++){
        var uniqueColors = document.createElement('div');
        uniqueColors.style.height = `${size+5}px`;
        uniqueColors.style.width = `${size}px`;
        uniqueColors.className = "colorClass";
        var randnumb1 = Math.floor(Math.random() * 255);
        var randnumb2 = Math.floor(Math.random() * 255);
        var randnumb3 = Math.floor(Math.random() * 255);
        uniqueColors.style.backgroundColor = "rgb(" + (255 - randnumb1) + "," + (255 - randnumb2)  + "," + (255 - randnumb3) +")";
        rows_colorSwatch.appendChild(uniqueColors);

        uniqueColors.addEventListener('click',this.setColor);
      }
    }
  }

  setColor(e){
    this._colorCache = e.target.style.backgroundColor;
  }

  get color() {
    return this._colorCache;
  }

  get element() {
    return this._element;
  }

}
