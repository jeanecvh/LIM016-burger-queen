import { TestBed } from '@angular/core/testing';

import { GetOrderStatusService } from './get-order-status.service';

describe('GetOrderStatusService', () => {
  let service: GetOrderStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOrderStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
