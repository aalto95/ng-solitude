import { NgModule } from '@angular/core';

import { SliderModule } from './slider/slider.module';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [SliderModule],
  exports: [SliderModule],
})
export class NgSolitudeModule {}
