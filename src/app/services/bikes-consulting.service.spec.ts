import { TestBed, inject } from '@angular/core/testing';

import { BikesConsultingService } from './bikes-consulting.service';

describe('BikesConsultingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikesConsultingService]
    });
  });

  it('should be created', inject([BikesConsultingService], (service: BikesConsultingService) => {
    expect(service).toBeTruthy();
  }));
});
