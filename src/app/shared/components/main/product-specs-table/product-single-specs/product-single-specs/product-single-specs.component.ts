import { Component, OnInit } from '@angular/core';
import { IProductMac } from 'src/app/models/Products-mac';

@Component({
  selector: 'app-product-single-specs',
  templateUrl: './product-single-specs.component.html',
  styleUrls: ['./product-single-specs.component.scss']
})
export class ProductSingleSpecsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 productMac: IProductMac[] = [
    {
      id: '1',
      imgUrl: '/assets/img/Mac/main/macbook-air-specs.png',
      title: 'MacBook Air',
      color: 'grey | dark grey | beige',
      price: 999,
      specification: [

        {
        imgUrl: '13.3',
        title:'Retina display',
        },

        {
          imgUrl: '/assets/img/Mac/main/chip-m1-icon.png',
          title: 'Apple M1 chip',
        },

        {
          imgUrl: '/assets/img/Mac/main/memory-unified-icon-specs.png',
          title: 'Up to 16GB unified memory',
          description: 'For increased performance and power efficiency'
        },

        {
          imgUrl: '2TB',
          title: 'Maximum configurable storage',
        },

        {
        imgUrl: '/assets/img/Mac/main/battery-icon.png',
        title: 'Up to 18 hours battery life',
        },

        {
          imgUrl: '/assets/img/Mac/main/camera-icon.png',
          title: '720p FaceTime HD camera',
          description: 'With the image signal processor of M1 for drastically improved performance'
        },

        {
          imgUrl: '2,8 lb.',
          title: 'weight',
        },

        {
          imgUrl: '/assets/img/Mac/main/touch-id-specs.png',
          title: 'Touch ID',
        },


    ]

    },

    {
      id: '1',
      imgUrl: '/assets/img/Mac/main/macbook-pro13-specs.png',
      title: 'MacBook Pro 13 ',
      color: 'grey | dark grey',
      price: 1299,
      specification: [

        {
        imgUrl: '13.3',
        title:'Retina display',
        },

        {
          imgUrl: '/assets/img/Mac/main/chip-m1-icon.png',
          title: 'Apple M1 chip',
          description: 'Also available with Intel Core i5 or i7 processor'
        },

        {
          imgUrl: '/assets/img/Mac/main/memory-unified-icon-specs.png',
          title: 'Up to 16GB unified memory',
          description: 'For increased performance and power efficiency'
        },

        {
          imgUrl: '2TB',
          title: 'Maximum configurable storage',
        },

        {
        imgUrl: '/assets/img/Mac/main/battery-icon.png',
        title: 'Up to 20 hours battery life',
        },

        {
          imgUrl: '/assets/img/Mac/main/camera-icon.png',
          title: '720p FaceTime HD camera',
          description: 'With the image signal processor of M1 for drastically improved performance'
        },

        {
          imgUrl: '3.0 lb.',
          title: 'weight',
        },

        {
          imgUrl: '/assets/img/Mac/main/touch-bar-specs.png',
          title: 'Touch bar and Touch ID',
        },


    ]

    },

    {
      id: '1',
      imgUrl: '/assets/img/Mac/main/macbook-pro16-specs.png',
      title: 'MacBook Pro 16',
      color: 'grey | dark grey',
      price: 2399,
      specification: [

        {
        imgUrl: '16',
        title:'Retina display',
        },

        {
          imgUrl: '/assets/img/Mac/main/chip-intel-icon.png',
          title: 'Up to Intel Core i9 processor',
        },

        {
          imgUrl: '/assets/img/Mac/main/memory-icon.png',
          title: 'Up to 64GB memory',
          description: 'For increased performance and power efficiency'
        },

        {
          imgUrl: '2TB',
          title: 'Maximum configurable storage',
        },

        {
        imgUrl: '/assets/img/Mac/main/battery-icon.png',
        title: 'Up to 11 hours battery life',
        },

        {
          imgUrl: '/assets/img/Mac/main/camera-icon.png',
          title: '720p FaceTime HD camera',

        },

        {
          imgUrl: '4.3 lb.',
          title: 'weight',
        },

        {
          imgUrl: '/assets/img/Mac/main/touch-bar-specs.png',
          title: 'Touch bar and Touch ID',
        },


    ]

    }
    ]
}
