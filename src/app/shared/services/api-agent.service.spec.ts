import { TestBed, inject } from '@angular/core/testing';

import { ApiAgentService } from './api-agent.service';

describe('ApiAgentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiAgentService]
    });
  });

  it('should be created', inject([ApiAgentService], (service: ApiAgentService) => {
    expect(service).toBeTruthy();
  }));
});
