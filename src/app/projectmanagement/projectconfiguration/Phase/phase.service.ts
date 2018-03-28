import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment as env } from '@env/environment';
import { Phase } from '../Models/ProjectConfigurationModels';

const API_URL = env.apiUrl;
const API_CONTROLLER = 'PHASE';

@Injectable()
export class PhaseService {
  constructor(private httpClient: HttpClient) { }
  retrievePhases(): Observable<Phase[]> {
    return this.httpClient
      .get<Phase[]>(API_URL + API_CONTROLLER);
  }
}
