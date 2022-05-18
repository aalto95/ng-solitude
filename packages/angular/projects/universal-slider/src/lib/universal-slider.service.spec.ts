import { TestBed } from '@angular/core/testing';

import { UniversalSliderService } from './universal-slider.service';

describe('UniversalSliderService', () => {
  let service: UniversalSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversalSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
