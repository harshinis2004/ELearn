import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoupscComponent } from './videoupsc.component';

describe('VideoupscComponent', () => {
  let component: VideoupscComponent;
  let fixture: ComponentFixture<VideoupscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoupscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoupscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
