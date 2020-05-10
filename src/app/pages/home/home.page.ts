import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('slider', { static: true }) slider: ElementRef;

  sliderOpts = {
    autoplay: true,
    // zoom: {
    //   maxRatio: 5
    // }
  };

  constructor() { }

  ngOnInit() {}


}
