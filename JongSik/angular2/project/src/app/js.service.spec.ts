import { TestBed, inject } from '@angular/core/testing';

import { JsService } from './js.service';

describe('JsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsService]
    });
  });

  it('should ...', inject([JsService], (service: JsService) => {
    expect(service).toBeTruthy();
  }));
});
