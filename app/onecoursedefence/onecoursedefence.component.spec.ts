import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecoursedefenceComponent } from './onecoursedefence.component';

describe('OnecoursedefenceComponent', () => {
  let component: OnecoursedefenceComponent;
  let fixture: ComponentFixture<OnecoursedefenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnecoursedefenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnecoursedefenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
