import { Component, OnInit } from '@angular/core';

import {DataCitiesService} from "../../../data/services/dataCities/data-cities.service"
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homescreen-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './homescreen-layout.component.html',
  styleUrl: './homescreen-layout.component.scss'
})
export class HomescreenLayoutComponent implements OnInit {
  dataCities: any[] = [];
  constructor(private dataCitiesServices: DataCitiesService) {  }
  ngOnInit(): void {

    this.dataCitiesServices.getData().subscribe(data => {
      this.dataCities = data.cities;
    } )

  }
  

}