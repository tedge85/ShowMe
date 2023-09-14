import { Component } from '@angular/core';
import { Show } from '../show';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-show-listing',
  templateUrl: './show-listing.component.html',
  styleUrls: ['./show-listing.component.css']
})
export class ShowListingComponent {
  showsList: Show[] = [];
  filteredShowsList: Show[] = [];
  searchText: string = "";

constructor(private showsService: ShowsService) {
  this.showsList = this.showsService.getAllShows();
  this.filteredShowsList = this.showsList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredShowsList = this.showsList;
    }

    this.filteredShowsList = this.showsList.filter(
      show => show?.series.toLowerCase().includes(text.toLowerCase())
    );
  }
  
  radioReset() {
    this.filteredShowsList = this.showsList;
  }

  radioFilterN() {
    this.filteredShowsList = this.showsList.filter(show => show.platform.toLowerCase() === 'netflix');
  }

  radioFilterP() {
    this.filteredShowsList = this.showsList.filter(show => show.platform.toLowerCase() === 'prime');
  }

  radioFilterD() {
    this.filteredShowsList = this.showsList.filter(show => show.platform.toLowerCase() === 'disney plus');
  }
}
