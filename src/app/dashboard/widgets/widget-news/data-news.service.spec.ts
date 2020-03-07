import { TestBed } from '@angular/core/testing';

import { DataNewsService } from './data-news.service';

describe('DataNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataNewsService = TestBed.get(DataNewsService);
    expect(service).toBeTruthy();
  });
});
