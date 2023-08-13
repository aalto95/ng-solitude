import { Component, Input, OnInit } from '@angular/core';

export interface Slide {
  label: string;
  paragraph: string;
  image: string;
}

@Component({
  selector: 'sol-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.scss'],
})
export class SliderComponent implements OnInit {
  constructor() {}

  @Input()
  slides: Slide[] = [];
  slideDirection: string = '';
  currentSlideId: number = 0;
  downX: number = 1;
  upX: number = 1;

  slideLeft() {
    this.slideDirection = 'left';
    if (this.currentSlideId > 0) {
      this.currentSlideId -= 1;
    } else {
      this.currentSlideId = this.slides.length - 1;
    }
  }

  slideRight() {
    this.slideDirection = 'right';
    if (this.currentSlideId < this.slides.length - 1) {
      this.currentSlideId += 1;
    } else {
      this.currentSlideId = 0;
    }
  }

  gesturedSlide() {
    if (this.downX + 100 < this.upX) {
      this.slideLeft();
    } else if (this.downX > this.upX + 100) {
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
