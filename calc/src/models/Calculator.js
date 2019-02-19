class Calculator extends Element{

  constructor(){
      super();
      this.initDOMElement();
      this._a = null;
      this._b = null;
      this._operant = null;
      this._c;
      this._display = "0";
      this._memory = null;
      this.firstNumer = true;
      this.doMath = {
        '+' : function(a,b){ return parseFloat(a)+parseFloat(b);},
        '-' : function(a,b){ return parseFloat(a)-parseFloat(b);},
        'x' : function(a,b){ return parseFloat(a) * parseFloat(b);}
      }
  }

  set a(value){
    if(this.firstNumer){
      this._a = value;
      this.firstNumer = false;
    }else{
      this._a+= value;
    }
    this.DOMElement.querySelector(".display").innerHTML = this.a;
    console.log("set a");
  }

  get a(){
    return this._a;
  }

  set b(value){
    if(this.firstNumer){
      this._b = value;
      this.firstNumer = false;
    }else{
      this._b+= value;
    }
    this.DOMElement.querySelector(".display").innerHTML = this.b;
    console.log("set b");
  }

  get b(){
    return this._b;
  }

  set c(value){
    this._c = value;
    this.a = this.c;
  }

  get c(){
    return this._c;
  }

  set operant(value){
    if(this.b != null){
      this.c = this.doMath[this.operant](this.a,this.b);
    }
    this._operant = value;
    this.firstNumer = true;
    this.DOMElement.querySelector('.memory').innerHTML = this.a + this.operant;
    this.DOMElement.querySelector('.display').innerHTML = 0;
  }

  get operant(){
    return this._operant;
  }

  initDOMElement(){
    var calculator = document.createElement("div");
    calculator.id = "calculator";

    let buttonArray = [
      {value: "",class: "memory"},
      {value: "0",class: "display"},
      {value: "AC",class: "special"},
      {value: "+/-",class: "special"},
      {value: "%",class: "special"},
      {value: "/",class: "orange operant"},
      {value: "7",class: "number"},
      {value: "8",class: "number"},
      {value: "9",class: "number"},
      {value: "x",class: "orange operant"},
      {value: "4",class: "number"},
      {value: "5",class: "number"},
      {value: "6",class: "number"},
      {value: "-",class: "orange operant"},
      {value: "1",class: "number"},
      {value: "2",class: "number"},
      {value: "3",class: "number"},
      {value: "+",class: "orange operant"},
      {value: "0",class: "zero"},
      {value: ",",class: "special comma"},
      {value: "=",class: "orange special"}
    ];

    for (let i = 0; i < buttonArray.length; i++) {
      var el = document.createElement("div");
      el.innerHTML = buttonArray[i]["value"];
      el.classList = buttonArray[i]["class"];
      el.onclick = (e)=>{
        if(e.target.classList.contains("number")){
          if(this.operant == null){
            this.dataBind(e,"a");
          }else{
            this.dataBind(e,"b");
          } 
        }
        if(e.target.classList.contains("operant")){
          this.dataBind(e,"operant");
        }
      };
      calculator.appendChild(el);
    }

    this.DOMElement = calculator;
  }

  dataBind(e,variable){
    this[variable] = e.target.innerHTML;
  }

}