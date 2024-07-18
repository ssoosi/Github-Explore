import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitHubApiService {
  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  searchRepositories(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/repositories?q=${query}`);
  }

  getRepository(owner: string, repo: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/repos/${owner}/${repo}`);
  }

  getIssues(owner: string, repo: string, state: string = 'all'): Observable<any> {
    return this.http.get(`${this.baseUrl}/repos/${owner}/${repo}/issues?state=${state}`);
  }
}
