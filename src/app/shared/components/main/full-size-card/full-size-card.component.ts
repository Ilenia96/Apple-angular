import { Component, Input, OnInit } from '@angular/core';
import { IFullsizeCard } from 'src/app/models/Main';

@Component({
  selector: 'app-full-size-card',
  templateUrl: './full-size-card.component.html',
  styleUrls: ['./full-size-card.component.scss']
})
export class FullSizeCardComponent implements OnInit {
  
  @Input() fullSizeCard !: IFullsizeCard;

  constructor() { }

  ngOnInit(): void {
  }


}
