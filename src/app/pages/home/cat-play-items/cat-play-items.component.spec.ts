import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPlayItemsComponent } from './cat-play-items.component';

describe('CatPlayItemsComponent', () => {
  let component: CatPlayItemsComponent;
  let fixture: ComponentFixture<CatPlayItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatPlayItemsComponent]
    });
    fixture = TestBed.createComponent(CatPlayItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
