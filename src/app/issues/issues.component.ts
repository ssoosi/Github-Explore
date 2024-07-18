import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitHubApiService } from '../github-api.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues: any;

  constructor(
    private route: ActivatedRoute,
    private githubApiService: GitHubApiService
  ) { }

  ngOnInit(): void {
    this.fetchIssues();
  }

  fetchIssues(): void {
    const owner = this.route.snapshot.paramMap.get('owner');
    const repo = this.route.snapshot.paramMap.get('repo');

    // Check if owner and repo are not null before calling API
    if (owner && repo) {
      this.githubApiService.getIssues(owner, repo).subscribe(data => {
        this.issues = data;
      });
    } else {
      console.error('Owner or repo parameters are null or undefined.');
      // Handle the case where parameters are missing or null
      // For example, redirect to an error page or show a message to the user
    }
  }

  filterIssues(state: string): void {
    const owner = this.route.snapshot.paramMap.get('owner');
    const repo = this.route.snapshot.paramMap.get('repo');

    // Check if owner and repo are not null before calling API
    if (owner && repo) {
      this.githubApiService.getIssues(owner, repo, state).subscribe(data => {
        this.issues = data;
      });
    } else {
      console.error('Owner or repo parameters are null or undefined.');
      // Handle the case where parameters are missing or null
      // For example, redirect to an error page or show a message to the user
    }
  }
}
