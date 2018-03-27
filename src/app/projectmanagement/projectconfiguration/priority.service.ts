import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment as env } from '@env/environment';
import { Priority } from './Models/ProjectConfigurationModels';

const API_URL = env.apiUrl;
const API_CONTROLLER = 'PRIORITY';

@Injectable()
export class PriorityService {
  constructor(private httpClient: HttpClient) { }
  retrievePriorities(): Observable<Priority[]> {
    return this.httpClient
      .get<Priority[]>(API_URL + API_CONTROLLER);
  }
}
