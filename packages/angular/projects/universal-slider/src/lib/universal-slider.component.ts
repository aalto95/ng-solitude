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
  slideDirection: string = '';
  activeSlide: number = 0;
  downX: number = 1;
  upX: number = 1;

  slideLeft() {
    this.slideDirection = 'left';
    if (this.activeSlide > 0) {
      this.activeSlide -= 1;
    } else {
      this.activeSlide = this.slides.length - 1;
    }
  }

  slideRight() {
    this.slideDirection = 'right';
    if (this.activeSlide < this.slides.length - 1) {
      this.activeSlide += 1;
    } else {
      this.activeSlide = 0;
    }
  }

  gesturedSlide() {
    if (this.downX + 50 < this.upX) {
      this.slideLeft();
    } else if (this.downX > this.upX + 50) {
      this.slideRight();
    }
  }

  listenToMousedown(e: MouseEvent) {
    this.downX = e.clientX;
  }

  listenToMouseup(e: MouseEvent) {
    this.upX = e.clientX;
    this.gesturedSlide();
  }

  listenToTouchstart(e: TouchEvent) {
    this.downX = e.touches[0].clientX;
  }

  listenToTouchend(e: TouchEvent) {
    this.upX = e.changedTouches[0].clientX;
    this.gesturedSlide();
  }

  ngOnInit(): void {}
}
