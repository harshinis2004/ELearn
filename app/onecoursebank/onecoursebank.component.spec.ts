import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecoursebankComponent } from './onecoursebank.component';

describe('OnecoursebankComponent', () => {
  let component: OnecoursebankComponent;
  let fixture: ComponentFixture<OnecoursebankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnecoursebankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnecoursebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
