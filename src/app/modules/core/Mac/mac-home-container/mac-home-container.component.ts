import { Component, OnInit } from '@angular/core';
import { IHeader, IHeaderNavbar } from 'src/app/models/Header';
import { FooterNav} from 'src/app/models/Footer'
import { MacDataService } from 'src/app/shared/services/MacDataService';

@Component({
  selector: 'app-mac-home-container',
  templateUrl: './mac-home-container.component.html',
  styleUrls: ['./mac-home-container.component.scss']
})
export class MacHomeContainerComponent implements OnInit {
  constructor(private macDataService: MacDataService) { }

  headerNavbar !: IHeaderNavbar;
  footerData !: FooterNav;

  ngOnInit(): void {
    this.macDataService.getHeader().subscribe(data => {
      this.headerNavbar = data
    });
    this.macDataService.getFooter().subscribe(data => {
      this.footerData = data;
    })
  }
}
