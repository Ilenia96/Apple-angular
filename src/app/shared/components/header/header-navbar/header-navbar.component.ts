import { Component, OnInit } from '@angular/core';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})

export class HeaderNavbarComponent implements OnInit {

  faSearch = faSearch;
  faApple = faApple;
  faShoppingBag = faShoppingBag;

  constructor() { }

  ngOnInit(): void {
  }

}
