import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOnlyComponent } from './show-only.component';

describe('ShowOnlyComponent', () => {
  let component: ShowOnlyComponent;
  let fixture: ComponentFixture<ShowOnlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowOnlyComponent]
    });
    fixture = TestBed.createComponent(ShowOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
