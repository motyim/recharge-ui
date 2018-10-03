import {TestBed} from '@angular/core/testing';

import {SummuryService} from './summury.service';

describe('SummuryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SummuryService = TestBed.get(SummuryService);
    expect(service).toBeTruthy();
  });
});
