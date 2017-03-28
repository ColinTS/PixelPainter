class Palette{

  constructor(size, border, display, paletteGrid, Colors){
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

      pixels.addEventListener('click',function(){
        this.style.backgroundColor = Colors.ColorCache;
      });

      }
    }
  }

  get element() {
    return this._element;
  }
}

//       pixels.addEventListener('click', function() {
//         this.style.backgroundColor = colorCache;
//       });

//       var mousedown = false;
//       document.onmousedown = function(){
//         mousedown = true;
//       };
//       document.onmouseup = function(){
//         mousedown = false;
//       };

//       pixels.addEventListener('mouseover', function(){
//         if(mousedown === true){
//           this.style.backgroundColor = colorCache;
//           console.log(mousedown);
//         }
//       });

