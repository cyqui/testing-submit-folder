import { TestBed } from '@angular/core/testing';

import { ChargingStationsApiService } from './charging-stations-api.service';

describe('ChargeStationsApiService', () => {
  let service: ChargingStationsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargingStationsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
