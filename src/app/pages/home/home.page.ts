import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {
  city: string = ''; // Variable para almacenar la ciudad ingresada
  weather: any;

  constructor(private weather_service: WeatherService) {}

  ngOnInit() {}

  getWeather() {
    this.weather_service.getWeather(this.city).subscribe((data) => {
      this.weather = data;
    });
  }
}
