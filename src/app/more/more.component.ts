import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowsService } from '../shows.service';
import { Show } from 'src/app/show';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  id!: number;
  show!: Show;

  constructor(private route: ActivatedRoute, private showService: ShowsService) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id ? Number(id) : 0;
    const show = this.showService.getShowById(this.id);
    if (show) {
      this.show = show;
      } else {
          console.log('show not found with this id:');
    }
  }
}
