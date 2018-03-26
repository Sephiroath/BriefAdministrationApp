import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { environment as env } from '@env/environment';
import { Project } from './projects.reducer';

const API_URL = env.apiUrl;
const API_CONTROLLER = 'PROJECT';

@Injectable()
export class ProjectsService {
  constructor(private httpClient: HttpClient) { }
  retrieveProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(API_URL + API_CONTROLLER)
      .pipe()
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
