import { TestBed, inject } from '@angular/core/testing';

import { DailymotionService } from './dailymotion.service';

describe('DailymotionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailymotionService]
    });
  });

  it('should be created', inject([DailymotionService], (service: DailymotionService) => {
    expect(service).toBeTruthy();
  }));
});
