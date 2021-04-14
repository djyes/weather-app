import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl: string;
  constructor(private http : HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  getWeatherData() {
    return this.http.get(`${this.baseUrl}/get-weather-forecast`);
  }
}
