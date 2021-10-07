import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-device-header',
  templateUrl: './single-device-header.component.html',
  styleUrls: ['./single-device-header.component.scss']
})
export class SingleDeviceHeaderComponent implements OnInit {

  @Input() macs!: Array<any>;
  

  constructor() { }

  ngOnInit(): void {
  }

}
