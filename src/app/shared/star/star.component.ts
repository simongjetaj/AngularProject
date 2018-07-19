import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() preciseRating: number;
  roundedStarRating: number;
  starList: string[] = [];

  constructor() { }

  ngOnChanges(): void {
    
    this.roundedStarRating = Math.round(this.preciseRating * 2) / 2;

    for (var i = this.roundedStarRating; i >= 1; i--)
      this.starList.push('fa fa-star');

    if (i == .5) 
      this.starList.push('fa fa-star-half-o');

    for (let i = (5 - this.roundedStarRating); i >= 1; i--)
      this.starList.push('fa fa-star-o');
  }

}
