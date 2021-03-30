import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calc-key',
  templateUrl: './calc-key.component.html',
  styleUrls: ['../calculator.component.css','./calc-key.component.css'],
  providers: [ CalculatorService ]
})
export class CalcKeyComponent implements OnInit {
  @Input() number: number = -1
  @Input() calcsrv: CalculatorService

  calcService: CalculatorService

  value: number = -1
  constructor() { }

  ngOnInit() {
    this.value = this.number
    this.calcService = this.calcsrv
  }

  getNumber() {
    this.calcService.setNumber(this.value)
  }

}
