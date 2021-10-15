import { Component, Input, OnInit } from '@angular/core';
import { IHeaderNavbar } from "src/app/models/Header"

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent implements OnInit {

  @Input() discount !: boolean;
  @Input() discountText !: string;
  @Input() url !: string;

  @Input() headerNavbar !: IHeaderNavbar;

  constructor() { }

  ngOnInit(): void {
    
  }

}
