import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-corousel';

  url: string = 'https://th.bing.com/th/id/OIP.zv4YXmeU9GtmxTDd6qDZRwHaE8?pid=ImgDet&rs=1';
  pointer: number = 0;
  images = [
    'https://th.bing.com/th/id/OIP.zv4YXmeU9GtmxTDd6qDZRwHaE8?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.gNUdt5y7eZyCaODjR8S9_QHaE8?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.YoCgvOWsFXiJHTsgv5jLiAHaE8?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.vjB-ssKT-rBvmRSi0X47ywHaE8?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.h68W2qeWG0KZOt4WH2w_rQHaE8?pid=ImgDet&rs=1'
  ];
  imageChange(event: any): void {
    let idValue: string = event.target.id;
    let id: number = +idValue.slice(5);
    this.pointer = id;
    this.url = this.images[this.pointer];
  }
  previous(): void {
    this.pointer = (this.pointer - 1 + 5) % 5;
    this.url = this.images[this.pointer]
  }
  next(): void {
    this.pointer = (this.pointer + 1) % 5;
    this.url = this.images[this.pointer];
  }
}