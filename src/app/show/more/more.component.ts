import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  id!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.id = id ? Number(id) : 0; // default to 0 if id is null
}
}
