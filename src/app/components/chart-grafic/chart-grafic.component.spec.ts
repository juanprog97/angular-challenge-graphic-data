import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGraficComponent } from './chart-grafic.component';

describe('ChartGraficComponent', () => {
  let component: ChartGraficComponent;
  let fixture: ComponentFixture<ChartGraficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartGraficComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartGraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
