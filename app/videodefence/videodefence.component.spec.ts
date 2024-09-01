import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideodefenceComponent } from './videodefence.component';

describe('VideodefenceComponent', () => {
  let component: VideodefenceComponent;
  let fixture: ComponentFixture<VideodefenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideodefenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideodefenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
