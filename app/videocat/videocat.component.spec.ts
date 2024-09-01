import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocatComponent } from './videocat.component';

describe('VideocatComponent', () => {
  let component: VideocatComponent;
  let fixture: ComponentFixture<VideocatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideocatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
