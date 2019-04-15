import { TestBed } from '@angular/core/testing';

import { ItinerarysService } from './itinerarys.service';

describe('ItinerarysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItinerarysService = TestBed.get(ItinerarysService);
    expect(service).toBeTruthy();
  });
});
