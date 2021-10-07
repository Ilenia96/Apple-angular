import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { faApple } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterNavComponent implements OnInit {

  @Input() navLinkString: string = "";

  appleIcon = faApple;

  constructor() { }

  ngOnInit(): void {
  }

}
