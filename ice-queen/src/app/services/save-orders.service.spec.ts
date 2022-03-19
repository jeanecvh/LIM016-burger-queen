import { TestBed } from '@angular/core/testing';

import { SaveOrdersService } from './save-orders.service';

describe('SaveOrdersService', () => {
  let service: SaveOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
