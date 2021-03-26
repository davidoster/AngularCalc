import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calcTitle: string = "Angular Calculator"
  display: string = "0"
  firstNumber: number = 0
  secondNumber: number = 0
  symbol: string = ""

  constructor() { 
    // this.calcTitle = "Angular Calculator"
  }

  ngOnInit() {
    this.clear()
  }

  getNumber(value: number) {
    if(this.symbol != "") {
      if(this.display == "0") {
        this.display = value.toString()
        this.secondNumber = value
      } 
      else {
        this.display = ""
        this.display += value.toString()
        this.secondNumber = parseInt(this.display)
      }
    }
    else {
      if(this.display == "0") {
        this.display = value.toString()
        this.firstNumber = value
      } 
      else {
        this.display += value.toString()
        this.firstNumber = parseInt(this.display)
      }
    }
    console.log(this.firstNumber)
    console.log(this.secondNumber)
  }

  getSymbol(value) {
    this.symbol = value
    console.log(this.symbol)
  }

  calculate() {
    switch(this.symbol) {
      case '+': 
        this.display = (this.firstNumber + this.secondNumber).toString()
        break
      case '-':
        this.display = (this.firstNumber - this.secondNumber).toString()
        break
      case '*':
        this.display = (this.firstNumber * this.secondNumber).toString()
        break
      case '/':
        this.display = (this.firstNumber / this.secondNumber).toString()
        break
    }
    
    this.firstNumber = 0
    this.secondNumber = 0
    this.symbol = ""
  }

  clear() {
    this.firstNumber = 0
    this.secondNumber = 0
    this.display = "0"
    this.symbol = ""
  }
}

