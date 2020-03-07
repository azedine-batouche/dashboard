import { TestBed } from '@angular/core/testing';

import { DataParisService } from './data-paris.service';

describe('DataParisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataParisService = TestBed.get(DataParisService);
    expect(service).toBeTruthy();
  });
});
