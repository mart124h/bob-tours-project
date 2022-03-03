import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BobToursService {

  public tourtypes: any;

  baseUrl = 'https://bob-tours-app-1b998-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

  initialize()
  {
    this.getTourtypes().then(data => this.tourtypes = data);

  }

  getRegions()
  {
    let requestUrl = `${this.baseUrl}/Regions.json`;
    return this.http.get(requestUrl).toPromise();
  }

  getTourtypes()
  {
    let requestUrl = `${this.baseUrl}/Tourtypes.json`;
    return this.http.get(requestUrl).toPromise();
  }
}
