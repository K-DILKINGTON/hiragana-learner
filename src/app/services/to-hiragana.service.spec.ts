import { TestBed, inject } from '@angular/core/testing';

import { ToHiraganaService } from './to-hiragana.service';

describe('ToHiraganaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToHiraganaService]
    });
  });

  it('should ...', inject([ToHiraganaService], (service: ToHiraganaService) => {
    expect(service).toBeTruthy();
  }));
});
