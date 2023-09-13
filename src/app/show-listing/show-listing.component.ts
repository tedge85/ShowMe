import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from '../show/show.component';
import { Show } from '../show';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-show-listing',
  standalone: true,
  imports: [CommonModule,
            ShowComponent,
  ],
  templateUrl: './show-listing.component.html',
  styleUrls: ['./show-listing.component.css']
})
export class ShowListingComponent {
  showsList: Show[] = [];
  showsService: ShowsService = inject(ShowsService);
  filteredShowsList: Show[] = [];
  filterResults(text: string) {
    if (!text) {
      this.filteredShowsList = this.showsList;
    }

    this.filteredShowsList = this.showsList.filter(
      show => show?.series.toLowerCase().includes(text.toLowerCase())
    );
  }

  constructor() {
    this.showsList = this.showsService.getAllShows();
    this.filteredShowsList = this.showsList;
  }
}
