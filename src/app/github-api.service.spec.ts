import { TestBed } from '@angular/core/testing';

import { GitHubApiService } from './github-api.service';

describe('GithubApiService', () => {
  let service: GitHubApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHubApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
