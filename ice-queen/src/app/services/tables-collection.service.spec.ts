import { TestBed } from '@angular/core/testing';

import { TablesCollectionService } from './tables-collection.service';

describe('TablesCollectionService', () => {
  let service: TablesCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablesCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
