import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { StateExplorationComponent } from './state-exploration/state-exploration.component';
import { ExploreAndLearnComponent } from './explore-and-learn/explore-and-learn.component';
import { TravelBookingComponent } from './travel-booking/travel-booking.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    StateExplorationComponent,
    ExploreAndLearnComponent,
    TravelBookingComponent,
    UpcomingEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
