import { Component, OnInit, Input, Output} from '@angular/core';
import { CalculatorService } from './services/calculator.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [ CalculatorService ]
})
export class CalculatorComponent implements OnInit {
  calculatorService: CalculatorService = new CalculatorService()

  calcTitle: string = "Angular Calculator"
  
  constructor() {  
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

  getCalculationService(): CalculatorService {
    return this.calculatorService;
  }

}

