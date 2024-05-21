import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { SliderModule } from './slider/slider.module';

@NgModule({
  imports: [ButtonModule, SliderModule],
  exports: [ButtonModule, SliderModule],
})
export class NgSolitudeModule {}
