import { TestBed } from '@angular/core/testing';

import { DataMoviesService } from './data-movies.service';

describe('DataMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataMoviesService = TestBed.get(DataMoviesService);
    expect(service).toBeTruthy();
  });
});
