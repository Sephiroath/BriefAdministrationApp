import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment as env } from '@env/environment';
import { ProjectState } from '../Models/ProjectConfigurationModels';

const API_URL = env.apiUrl;
const API_CONTROLLER = 'PROJECTSTATE';

@Injectable()
export class ProjectstatusService {
  constructor(private httpClient: HttpClient) { }
  retrieveProjectStatus(): Observable<ProjectState[]> {
    return this.httpClient
      .get<ProjectState[]>(API_URL + API_CONTROLLER);
  }
}
