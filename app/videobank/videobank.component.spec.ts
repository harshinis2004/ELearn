import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideobankComponent } from './videobank.component';

describe('VideobankComponent', () => {
  let component: VideobankComponent;
  let fixture: ComponentFixture<VideobankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideobankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideobankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
