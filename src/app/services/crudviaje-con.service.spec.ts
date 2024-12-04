import { TestBed } from '@angular/core/testing';

import { CrudviajeConService } from './crudviaje-con.service';

describe('CrudviajeConService', () => {
  let service: CrudviajeConService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudviajeConService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
