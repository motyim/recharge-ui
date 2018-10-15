import { TestBed } from '@angular/core/testing';

import { ConfigTerminalService } from './config-terminal.service';

describe('ConfigTerminalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigTerminalService = TestBed.get(ConfigTerminalService);
    expect(service).toBeTruthy();
  });
});
