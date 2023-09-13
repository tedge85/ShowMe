import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowListingComponent } from './show-listing/show-listing.component';
import { ShowComponent } from './show/show.component';
import { ShowsService } from './shows.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ShowListingComponent,
    ShowComponent
  ],
  providers: [ShowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
