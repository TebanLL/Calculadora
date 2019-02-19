class Element{

  constructor(){
      this._DOMElement = null;
  }

  get DOMElement(){
    return this._DOMElement;
  }

  set DOMElement(value){
    this._DOMElement = value;
  }

  initDOMElement(){
  }
}