// src/app/components/weather/weather.component.ts

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  city: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherByCity('London'); // Cambia 'London' por la ciudad de tu elección
  }

  getWeatherByCity(city: string) {
    this.weatherService.getWeatherByCity(city).subscribe(
      (data) => {
        this.weatherData = data;
      },
      (error) => {
        console.log('Error fetching weather data:', error);
      }
    );
  }
}
