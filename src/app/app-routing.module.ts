import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';


const STATES = [
  { name: 'home', url: '/home', component: HomeComponent },
]



@NgModule({
  imports: [
    UIRouterModule.forRoot({ states: STATES, useHash: true })
  ],
  exports: [
    UIRouterModule
  ]
})
export class AppRoutingModule { }
