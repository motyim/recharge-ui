import {TestBed} from '@angular/core/testing';

import {TransferlogService} from './transferlog.service';

describe('TransferlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferlogService = TestBed.get(TransferlogService);
    expect(service).toBeTruthy();
  });
});
