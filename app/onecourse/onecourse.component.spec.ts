import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecourseComponent } from './onecourse.component';

describe('OnecourseComponent', () => {
  let component: OnecourseComponent;
  let fixture: ComponentFixture<OnecourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnecourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
