import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecoursenavyComponent } from './onecoursenavy.component';

describe('OnecoursenavyComponent', () => {
  let component: OnecoursenavyComponent;
  let fixture: ComponentFixture<OnecoursenavyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnecoursenavyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnecoursenavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
