import { Component, Input, OnInit } from '@angular/core';
import { IdiscountDevice } from 'src/app/models/Header';

@Component({
  selector: 'app-discount-device',
  templateUrl: './discount-device.component.html',
  styleUrls: ['./discount-device.component.scss']
})
export class DiscountDeviceComponent implements OnInit {
  
  @Input() discountDevice ?: IdiscountDevice;

  bottom = "0px";
  zIndex = "-1";
  bgcolor = "#0071E3";
  textColor = "white";
  linkColor = "white";


  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.bottom = "-35px";
    }, 0)
    setTimeout(() => {
      this.zIndex = "1";
    }, 2500)
    setTimeout(() => {
      this.bgcolor = "#f5f5f7";
      this.textColor = "#6e6e70";
      this.linkColor = "#0066CB";
    }, 3000)
  }

}
