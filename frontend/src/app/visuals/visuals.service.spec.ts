import { TestBed } from '@angular/core/testing';

import { VisualsService } from './visuals.service';

describe('VisualsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisualsService = TestBed.get(VisualsService);
    expect(service).toBeTruthy();
  });
});
