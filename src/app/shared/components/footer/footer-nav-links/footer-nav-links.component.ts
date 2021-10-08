import { ILink } from './ILink';
import { Component, OnInit } from '@angular/core';
import { buyProducts} from './links';
import { appleServices } from './links';
import { account } from './links';
import { appleStore } from './links';
import { business } from './links';
import { education } from './links';
import { health } from './links';
import { appleValues } from './links';
import { info } from './links';



@Component({
  selector: 'app-footer-nav-links',
  templateUrl: './footer-nav-links.component.html',
  styleUrls: ['./footer-nav-links.component.scss']
})
export class FooterNavLinksComponent implements OnInit {
buyproducts: ILink[] = buyProducts;
aServices: ILink[] = appleServices;
accounts : ILink[] = account;
aStores : ILink[] = appleStore;
companies : ILink[] = business;
educations : ILink[] = education;
gesunds : ILink[] = health;
applevalues : ILink[]= appleValues;
infos: ILink[] = info;







  constructor() { }

  ngOnInit(): void {
  }

}
