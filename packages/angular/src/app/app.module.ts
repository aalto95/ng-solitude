import { UniversalSliderModule } from './../../projects/universal-slider/src/lib/universal-slider.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UniversalSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
