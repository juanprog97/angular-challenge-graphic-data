import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenLayoutComponent } from '../layouts/homeScreen/homescreen-layout/homescreen-layout.component';
import { ChartGraficComponent } from '../components/chart-grafic/chart-grafic.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
export const routes: Routes = [
  {
    path: '',
    component: HomescreenLayoutComponent,
    children: [
      {
        path: 'weather/:nameCity',
        component: ChartGraficComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
