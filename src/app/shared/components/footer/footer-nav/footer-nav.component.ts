import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterNavComponent implements OnInit {

  title: string = "<span class='mx-3 h4 color-lightgray'>></span> Mac";

  constructor() { }

  ngOnInit(): void {
  }

}
