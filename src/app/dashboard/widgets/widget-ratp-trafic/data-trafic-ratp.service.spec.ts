import { TestBed } from '@angular/core/testing';

import { DataTraficRatpService } from './data-trafic-ratp.service';

describe('DataTraficRatpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataTraficRatpService = TestBed.get(DataTraficRatpService);
    expect(service).toBeTruthy();
  });
});
