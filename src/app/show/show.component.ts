import { Component, Input, OnInit } from '@angular/core';
import { Show } from '../show';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  @Input() show!: Show;
  constructor(private route: ActivatedRoute, private router: Router) { }
ngOnInit(): void {
  }
more(id: number){
  console.log('Navigating to more with id:', id);
  this.router.navigate(['more', id], {relativeTo:this.route});
}

}
