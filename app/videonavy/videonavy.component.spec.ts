import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideonavyComponent } from './videonavy.component';

describe('VideonavyComponent', () => {
  let component: VideonavyComponent;
  let fixture: ComponentFixture<VideonavyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideonavyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideonavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
