import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment as env } from '@env/environment';
import { GcrmState } from './Models/ProjectConfigurationModels';

const API_URL = env.apiUrl;
const API_CONTROLLER = 'GCRMSTATE';

@Injectable()
export class GcrmstatusService {
  constructor(private httpClient: HttpClient) { }
  retrievePhases(): Observable<GcrmState[]> {
    return this.httpClient
      .get<GcrmState[]>(API_URL + API_CONTROLLER);
  }
}
