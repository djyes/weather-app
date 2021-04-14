import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cityInfo: object;
  selectedDay: object;
  list: object;
  selectedKey: string;
  constructor(private appService : AppService) {}

  ngOnInit() {
    this.appService.getWeatherData().subscribe((res) => {
      this.cityInfo = res['city'];
      this.list = res['list'];
      this.selectDay(Object.keys(this.list)[0]);
    }, error => {
      console.log('error', error);
    });
  }

  selectDay(date) {
    this.selectedKey = date;
    this.selectedDay = this.list[date].map((data) => {
      data.weather.url = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
      return data;
    });
  }
}
