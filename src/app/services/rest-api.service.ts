import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  url: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json";
  local_url = "assets/data/apiResponse.json";

  constructor(private http: HttpClient) { }

  getResults() {
    // return this.http.post(this.url, formData);
    return this.http.get(this.local_url);
  }
}
