import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header-device',
  templateUrl: './header-device.component.html',
  styleUrls: ['./header-device.component.scss']
})
export class HeaderDeviceComponent implements OnInit {

  macs: Array<any> = [
     {
       name: "MacBook Air",
       imageUrl: "../../../../../assets/img/Mac/header/mac-1.svg"
     },
     {
       name: "MacBook Pro 13”",
       imageUrl: "../../../../../../assets/img/Mac/header/mac-2.svg"
     },
     {
      name: "MacBook Pro 16”",
      imageUrl: "../../../../../../assets/img/Mac/header/mac-3.svg"
     },
     {
      name: "iMac 24”",
      imageUrl: "../../../../../../assets/img/Mac/header/mac-4.svg"
     },
     {
      name: "iMac 27”",
      imageUrl: "../../../../../../assets/img/Mac/header/mac-5.svg"
     },
     {
      name: "Mac Pro",
      imageUrl: "../../../../../../assets/img/Mac/header/mac-6.svg"
     },
     {
      name: "Mac mini",
      imageUrl: "../../../../../../assets/img/Mac/header/mac-7.svg"
     },
     {
      name: "Compare",
      imageUrl: "../../../../../../assets/img/Mac/header/mac-8.svg"
     },
     {
      name: "Pro Display XDR",
      imageUrl: "../../../../../../assets/img/Mac/header/mac-9.svg"
     },
     {
      name: "Accessories",
      imageUrl: "../../../../../../assets/img/Mac/header/mac-10.svg"
     },
     {
      name: "Big Sur",
      imageUrl: "../../../../../../assets/img/Mac/header/mac-11.svg"
     }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
