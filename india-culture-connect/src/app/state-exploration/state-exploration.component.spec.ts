import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateExplorationComponent } from './state-exploration.component';

describe('StateExplorationComponent', () => {
  let component: StateExplorationComponent;
  let fixture: ComponentFixture<StateExplorationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateExplorationComponent]
    });
    fixture = TestBed.createComponent(StateExplorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
