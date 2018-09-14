import { TestBed, inject } from '@angular/core/testing';

import { TodoStorageService } from './todo-storage.service';

describe('TodoStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoStorageService]
    });
  });

  it('should be created', inject([TodoStorageService], (service: TodoStorageService) => {
    expect(service).toBeTruthy();
  }));
});
