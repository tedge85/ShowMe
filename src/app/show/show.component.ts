import { Component, Input, OnInit } from '@angular/core';
import { Show } from '../show';
import { ActivatedRoute, Router} from '@angular/router';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  @Input() show!: Show;
  constructor(private route: ActivatedRoute, private router: Router, private showService: ShowsService) { }
ngOnInit(): void {
  }
}

