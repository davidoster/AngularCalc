import { Component } from '@angular/core';
import { CalculatorService } from './calculator/services/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CalculatorService ]
})
export class AppComponent {
  title = 'ngapp';
  data = ["John", "Maria"]
}
