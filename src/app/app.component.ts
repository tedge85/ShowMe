import { Component } from '@angular/core';
import { ShowListingComponent } from './show-listing/show-listing.component';
import { ShowComponent } from './show/show.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShowMe';
}
