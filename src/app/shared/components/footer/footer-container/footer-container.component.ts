import { Component, OnInit, Input } from '@angular/core';
import { FooterNav } from 'src/app/models/Footer';

@Component({
  selector: 'app-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.scss']
})
export class FooterContainerComponent implements OnInit {

  @Input() footerData: FooterNav = {
    notesArray: [],
    navLinkString: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
