import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment as env } from '@env/environment';
import { Project } from './projects.reducer';

const API_URL = env.apiUrl;
const API_CONTROLLER = 'PROJECT';

@Injectable()
export class ProjectsService {
  constructor(private httpClient: HttpClient) { }
  retrieveProjects(): Observable<Project[]> {
    return this.httpClient
      .get<Project[]>(API_URL + API_CONTROLLER);
  }
}
