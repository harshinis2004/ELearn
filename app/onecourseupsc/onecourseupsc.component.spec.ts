import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecourseupscComponent } from './onecourseupsc.component';

describe('OnecourseupscComponent', () => {
  let component: OnecourseupscComponent;
  let fixture: ComponentFixture<OnecourseupscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnecourseupscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnecourseupscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
