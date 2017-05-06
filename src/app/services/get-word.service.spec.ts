import { TestBed, inject } from '@angular/core/testing';

import { GetWordService } from './get-word.service';

describe('GetWordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetWordService]
    });
  });

  it('should ...', inject([GetWordService], (service: GetWordService) => {
    expect(service).toBeTruthy();
  }));
});
