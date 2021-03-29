import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private _firstNumber: number = 0
  private _secondNumber: number = 0
  private _symbol: string = ""
  private _display: string = "0"


  constructor() { }

  setNumber(value: number) {
    if(this._symbol !== "" && this._display == "0") {
      this.evalDisplay(value, 0)
      this.secondNumber = value
    }
    else if(this._symbol == "" && this._display == "0") {
      this.evalDisplay(value, 1)
      this.secondNumber = this.display
    } else if(this._symbol !== "" && this._display != "0") {
      this.evalDisplay(value, 1)  
      this.firstNumber = this.display
    } else {
      this.evalDisplay(value, 0)
      this.firstNumber = value
    }
  }

  calculate() {
    console.log(this._firstNumber, this._secondNumber, this._symbol)
    switch(this._symbol) {
      case '+': 
        this.evalDisplay((this.firstNumber + this.secondNumber),0)
        break
      case '-':
        this.evalDisplay((this.firstNumber - this.secondNumber),0)
        break
      case '*':
        this.evalDisplay((this.firstNumber * this.secondNumber),0)
        break
      case '/':
        this.evalDisplay((this.firstNumber / this.secondNumber),0)
        break
    }
  }

  clear() {
    this.firstNumber = 0
    this.secondNumber = 0
    this.evalDisplay("0", 0)
    this.symbol = ""
    // console.log(this.xxx)
  }

  get firstNumber() {
    return this._firstNumber
  }

  set firstNumber(value: any) {
    // ???? if
    this._firstNumber = parseInt(value)
  }

  get secondNumber() {
    return this._secondNumber
  }

  set secondNumber(value: any) {
    this._secondNumber = parseInt(value)
  }

  get symbol() {
    return this._symbol
  }

  set symbol(value) {
    this._symbol = value
  }

  // number = 0, _display =  value
  // number = 1, _display += value 
  evalDisplay(value: any, type: number) {
    if(type == 0)
      this._display = value.toString()
    else
      this._display += value.toString()  
  }

  get display() {
    return this._display
  }

}
