import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Show } from '../show';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  
})
export class ShowComponent {

  @Input() show!: Show;
}


