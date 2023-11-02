import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { StateExplorationComponent } from './state-exploration/state-exploration.component';
import { ExploreAndLearnComponent } from './explore-and-learn/explore-and-learn.component';
import { TravelBookingComponent } from './travel-booking/travel-booking.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories/:category', component: CategoryComponent },
  { path: 'state-wise-exploration', component: StateExplorationComponent },
  { path: 'travel-booking', component: TravelBookingComponent },
  { path: 'explore-and-learn', component: ExploreAndLearnComponent },
  { path: 'upcoming-events', component: UpcomingEventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
