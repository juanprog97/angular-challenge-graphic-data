import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomescreenLayoutComponent } from './homescreen-layout.component';

describe('HomescreenLayoutComponent', () => {
  let component: HomescreenLayoutComponent;
  let fixture: ComponentFixture<HomescreenLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomescreenLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomescreenLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
