import { Component, OnInit } from '@angular/core';
import { GithubDataService } from './github-data.service';
import { Github } from './interfaces/github';
import { HttpError } from '../../interfaces/http-error';
import { Repository } from './interfaces/repository';

@Component({
  selector: 'app-widget-github',
  templateUrl: './widget-github.component.html',
  styleUrls: ['./widget-github.component.scss'],
  providers: [GithubDataService]
})
export class WidgetGithubComponent implements OnInit {
  errors: HttpError;
  githubInfo: Github;
  mainRepo: Repository;

  constructor(private githubDataService: GithubDataService) {}

  private filterData(data: any) {
    this.githubInfo = data;
    if (this.githubInfo.repo) {
      this.mainRepo = this.githubInfo.repo[0];
      this.githubInfo.repo.shift();
    }
  }

  ngOnInit() {
    this.githubDataService.getGithubDataEachDay().subscribe(
      data => this.filterData(data),
      errors => (this.errors = errors.error)
    );
  }
}
