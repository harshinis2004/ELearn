import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecoursegateComponent } from './onecoursegate.component';

describe('OnecoursegateComponent', () => {
  let component: OnecoursegateComponent;
  let fixture: ComponentFixture<OnecoursegateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnecoursegateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnecoursegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
