import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { environment as env } from '@env/environment';
import { GcrmState } from './Models/ProjectConfigurationModels';

const API_URL = env.apiUrl;
const API_CONTROLLER = 'GCRMSTATE';

@Injectable()
export class GcrmstateService {

  constructor() { }

}