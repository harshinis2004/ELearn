import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojeeComponent } from './videojee.component';

describe('VideojeeComponent', () => {
  let component: VideojeeComponent;
  let fixture: ComponentFixture<VideojeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideojeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideojeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
