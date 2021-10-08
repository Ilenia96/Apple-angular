import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount-device',
  templateUrl: './discount-device.component.html',
  styleUrls: ['./discount-device.component.scss']
})
export class DiscountDeviceComponent implements OnInit {

  @Input() discount !: boolean;
  @Input() discountText !: string;
  @Input() url !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
