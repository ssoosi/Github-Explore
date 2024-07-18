import { Component } from '@angular/core';
import { GitHubApiService } from '../github-api.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = ''; // Initializing with an empty string
  repositories: any;
  isLoading: boolean = false;

  constructor(private githubApiService: GitHubApiService) { }

  searchRepositories(): void {
    this.isLoading = true; // Set isLoading to true when starting the search
    this.githubApiService.searchRepositories(this.searchTerm).subscribe(data => {
      this.repositories = data;
      this.isLoading = false; // Set isLoading to false when data is loaded
    }, error => {
      this.isLoading = false; // Handle error case by setting isLoading to false
      console.error('Error fetching repositories:', error);
    });
  }
}
