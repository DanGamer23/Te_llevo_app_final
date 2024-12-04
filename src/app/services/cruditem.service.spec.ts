import { TestBed } from '@angular/core/testing';

import { CruditemService } from './cruditem.service';

describe('CruditemService', () => {
  let service: CruditemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CruditemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
