import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogateComponent } from './videogate.component';

describe('VideogateComponent', () => {
  let component: VideogateComponent;
  let fixture: ComponentFixture<VideogateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideogateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideogateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
