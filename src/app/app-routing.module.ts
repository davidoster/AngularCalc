import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Routes routes = new Routes() - JAVA ONLY
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
