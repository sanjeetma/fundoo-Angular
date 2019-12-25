import { TestBed } from '@angular/core/testing';

import { GridviewService } from './gridview.service';

describe('GridviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridviewService = TestBed.get(GridviewService);
    expect(service).toBeTruthy();
  });
});
