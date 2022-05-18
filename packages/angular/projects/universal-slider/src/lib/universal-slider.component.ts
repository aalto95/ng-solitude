import { Component, Input, OnInit } from '@angular/core';
import { Slide } from './slide';

@Component({
  selector: 'lib-universal-slider',
  templateUrl: 'universal-slider.component.html',
  styleUrls: ['universal-slider.component.scss'],
})
export class UniversalSliderComponent implements OnInit {
  constructor() {}

  @Input()
  slides: Slide[] = [];

  activeSlide: number = 0;

  slideLeft() {
    if (this.activeSlide > 0) {
      this.activeSlide -= 1;
    } else {
      this.activeSlide = this.slides.length - 1;
    }
  }

  slideRight() {
    if (this.activeSlide < this.slides.length - 1) {
      this.activeSlide += 1;
    } else {
      this.activeSlide = 0;
    }
  }

  ngOnInit(): void {}
}
