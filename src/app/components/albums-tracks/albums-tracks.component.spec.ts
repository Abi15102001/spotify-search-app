import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsTracksComponent } from './albums-tracks.component';

describe('AlbumsTracksComponent', () => {
  let component: AlbumsTracksComponent;
  let fixture: ComponentFixture<AlbumsTracksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsTracksComponent]
    });
    fixture = TestBed.createComponent(AlbumsTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
