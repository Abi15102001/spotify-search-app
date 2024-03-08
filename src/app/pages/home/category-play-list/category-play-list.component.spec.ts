import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPlayListComponent } from './category-play-list.component';

describe('CategoryPlayListComponent', () => {
  let component: CategoryPlayListComponent;
  let fixture: ComponentFixture<CategoryPlayListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryPlayListComponent]
    });
    fixture = TestBed.createComponent(CategoryPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
