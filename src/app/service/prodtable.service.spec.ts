import { TestBed } from '@angular/core/testing';

import { ProdtableService } from './prodtable.service';

describe('ProdtableService', () => {
  let service: ProdtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
