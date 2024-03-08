import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistalbumsComponent } from './artistalbums.component';

describe('ArtistalbumsComponent', () => {
  let component: ArtistalbumsComponent;
  let fixture: ComponentFixture<ArtistalbumsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistalbumsComponent]
    });
    fixture = TestBed.createComponent(ArtistalbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
