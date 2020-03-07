import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Github } from './interfaces/github';
import { Repository } from './interfaces/repository';
import { timer } from 'rxjs';
import { settings } from '../settings/settings';

@Injectable({
  providedIn: 'root'
})
export class GithubDataService {
  private refreshGitHubTime: number = 86400000;
  private githubInfo: Github = { author: '', avatar: '', repo: [] };
  private repository: Repository = {
    name: '',
    language: '',
    nbFollowers: 0,
    nbWatched: 0,
    nbCommits: 0,
    nbStars: 0,
    nbIssues: 0,
    private: false
  };

  constructor(private http: HttpClient) {}

  getGithubDataEachDay() {
    return timer(0, this.refreshGitHubTime).pipe(switchMap(() => this.getGithubData()));
  }

  private getGithubData() {
    return this.http.get(settings.API_GITHUB_URL).pipe(map(response => this.mapDataGithub(response)));
  }

  private mapDataGithub(data: any): Github {
    this.githubInfo.author = data[0]['owner'].login;
    this.githubInfo.avatar = data[0]['owner'].avatar_url;

    data.forEach(repos => {
      this.repository.name = repos.name;
      this.repository.private = repos.private;
      this.repository.language = repos.language;
      this.repository.nbStars = repos.stargazers_count;
      this.repository.nbWatched = repos.watchers_count;
      this.repository.nbIssues = repos.open_issues;
      this.githubInfo.repo.push(this.repository);
      this.repository = {
        name: '',
        language: '',
        nbFollowers: 0,
        nbWatched: 0,
        nbCommits: 0,
        nbStars: 0,
        nbIssues: 0,
        private: false
      };
    });
    return this.githubInfo;
  }
}
