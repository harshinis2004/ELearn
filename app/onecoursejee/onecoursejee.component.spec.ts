import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecoursejeeComponent } from './onecoursejee.component';

describe('OnecoursejeeComponent', () => {
  let component: OnecoursejeeComponent;
  let fixture: ComponentFixture<OnecoursejeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnecoursejeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnecoursejeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
