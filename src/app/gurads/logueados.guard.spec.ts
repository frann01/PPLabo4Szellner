import { TestBed } from '@angular/core/testing';

import { LogueadosGuard } from './logueados.guard';

describe('LogueadosGuard', () => {
  let guard: LogueadosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogueadosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
