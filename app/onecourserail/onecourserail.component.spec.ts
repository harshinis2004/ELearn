import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecourserailComponent } from './onecourserail.component';

describe('OnecourserailComponent', () => {
  let component: OnecourserailComponent;
  let fixture: ComponentFixture<OnecourserailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnecourserailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnecourserailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
