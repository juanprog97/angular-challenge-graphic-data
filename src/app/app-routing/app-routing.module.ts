import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomescreenLayoutComponent} from '../layouts/homeScreen/homescreen-layout/homescreen-layout.component'
import { ChartGraficComponent} from "../components/chart-grafic/chart-grafic.component"
export const routes: Routes = [
  {
    path: '',
    component: HomescreenLayoutComponent,
    children: [
      {
        path: 'weather/:nameCity',
        component: ChartGraficComponent
        
      }
    ]
  }
];




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
