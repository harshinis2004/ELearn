import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideorailComponent } from './videorail.component';

describe('VideorailComponent', () => {
  let component: VideorailComponent;
  let fixture: ComponentFixture<VideorailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideorailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideorailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
