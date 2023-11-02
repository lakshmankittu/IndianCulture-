import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreAndLearnComponent } from './explore-and-learn.component';

describe('ExploreAndLearnComponent', () => {
  let component: ExploreAndLearnComponent;
  let fixture: ComponentFixture<ExploreAndLearnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreAndLearnComponent]
    });
    fixture = TestBed.createComponent(ExploreAndLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
