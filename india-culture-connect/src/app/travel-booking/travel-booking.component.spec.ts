import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelBookingComponent } from './travel-booking.component';

describe('TravelBookingComponent', () => {
  let component: TravelBookingComponent;
  let fixture: ComponentFixture<TravelBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelBookingComponent]
    });
    fixture = TestBed.createComponent(TravelBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
