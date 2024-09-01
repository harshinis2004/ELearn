import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecoursecatComponent } from './onecoursecat.component';

describe('OnecoursecatComponent', () => {
  let component: OnecoursecatComponent;
  let fixture: ComponentFixture<OnecoursecatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnecoursecatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnecoursecatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
