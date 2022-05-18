import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalSliderComponent } from './universal-slider.component';

describe('UniversalSliderComponent', () => {
  let component: UniversalSliderComponent;
  let fixture: ComponentFixture<UniversalSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversalSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
