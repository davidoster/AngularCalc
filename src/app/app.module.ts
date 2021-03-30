import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcKeyComponent } from './calculator/calc-key/calc-key.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalcKeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CalculatorComponent]
})
export class AppModule { }
