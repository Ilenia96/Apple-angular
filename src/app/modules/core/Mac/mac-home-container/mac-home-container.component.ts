import { Component, OnInit } from '@angular/core';
import { IHeader, IHeaderNavbar } from 'src/app/models/Header';
import { IFooterNav} from 'src/app/models/Footer'
import { MacDataService } from 'src/app/shared/services/MacDataService';

@Component({
  selector: 'app-mac-home-container',
  templateUrl: './mac-home-container.component.html',
  styleUrls: ['./mac-home-container.component.scss']
})
export class MacHomeContainerComponent implements OnInit {
  constructor(private macDataService : MacDataService) { }

  headerNavbar !: IHeaderNavbar;
  footerData !: IFooterNav;

  ngOnInit(): void {
    this.macDataService.getHeader().subscribe(data => {
      this.headerNavbar = data[0].headerNavbar;
      // console.log(`${JSON.stringify(this.headerNavbar)}`);
      // console.log(`${JSON.stringify(this.headerNavbar.discountDevice)}`);
      // console.log(this.headerNavbar.discountDevice.discount)
    });

    this.macDataService.getFooter().subscribe(data => {
      // this.footerData = data[2];
      console.log(data[0]);
    })

  }
}
