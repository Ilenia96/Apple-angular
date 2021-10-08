import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-size-card',
  templateUrl: './full-size-card.component.html',
  styleUrls: ['./full-size-card.component.scss']
})
export class FullSizeCardComponent implements OnInit {
  
  @Input() isNew !: boolean;
  @Input() productTitle !: string;
  @Input() motto !: string;
  @Input() startingPrice !: number;
  @Input() url !: string;


  constructor() { }

  ngOnInit(): void {
  }


}
