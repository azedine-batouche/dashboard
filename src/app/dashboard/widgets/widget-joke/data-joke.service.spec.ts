import { TestBed } from '@angular/core/testing';

import { DataJokeService } from './data-joke.service';

describe('DataJokeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataJokeService = TestBed.get(DataJokeService);
    expect(service).toBeTruthy();
  });
});
