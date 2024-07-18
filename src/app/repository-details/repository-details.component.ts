import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitHubApiService } from '../github-api.service';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.css']
})
export class RepositoryDetailsComponent implements OnInit {
  repository: any; // Define repository property

  constructor(
    private route: ActivatedRoute,
    private githubApiService: GitHubApiService
  ) { }

  ngOnInit(): void {
    const owner = this.route.snapshot.paramMap.get('owner');
    const repo = this.route.snapshot.paramMap.get('repo');

    // Check if owner and repo are not null before calling API
    if (owner && repo) {
      this.githubApiService.getRepository(owner, repo).subscribe(data => {
        this.repository = data;
      });
    } else {
      console.error('Owner or repo parameters are null or undefined.');
      // Handle the case where parameters are missing or null
      // For example, redirect to an error page or show a message to the user
    }
  }
}
