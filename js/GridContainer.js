class GridContainer{
  constructor(id, width, height, border){
    this._element = document.createElement('div');
    this._element.id = id;
    this._element.style.width = String(width);
    this._element.style.height = String(height);
    this._element.style.border = border;
  }

  get element() {
    return this._element;
  }
}