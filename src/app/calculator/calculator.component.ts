import { Component, OnInit, Input, Output} from '@angular/core';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [ CalculatorService ]
})
export class CalculatorComponent implements OnInit {
  @Input() xxx: number = 0
  @Output() zzz: number = 100

  // DECIDE 
            // if Input stays here
            // if Output goes to Service
            // if Both???? - ARE YOU OUT OF YOUR MIND?????

  // properties: Input, Output or both? Input

  // getNumber: Input, Output or both? Input
  // getSymbol: Input, Output or both? Input
  // calculate: Input, Output or both? Both?
  // clear    : Input, Output or both? Output

  // At the end, What shall we put on NgService CalculatorService?

  calculatorService: CalculatorService = new CalculatorService()

  calcTitle: string = "Angular Calculator"
  // display: string = "0"
  // firstNumber: number = 0
  // secondNumber: number = 0
  // symbol: string = ""

  constructor() { 
    // this.calcTitle = "Angular Calculator"
    // console.log(this.calculatorService.firstNumber)
    // console.log(this.xxx)
  }

  ngOnInit() {
    this.calculatorService.clear()
  }

  getNumber(value: number) {
    this.calculatorService.setNumber(value)
  }  
  
  getSymbol(value) {
    this.calculatorService.symbol = value
  }

}

