import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-home',
  templateUrl: '../home/home.page.html',
  styleUrls: ['../home/home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class HomePage {
  public weather: any;
  public city: string = '';
  public weatherForm: FormGroup = new FormGroup({
    city: new FormControl('', Validators.required)
  });
  constructor(
    private weatherService: WeatherService,
    private storage: Storage
  ) {
    this.weatherForm = new FormGroup({
      city: new FormControl('', Validators.required)
    });
  }

  search() {
    this.storage.set('city', this.city);

    this.weatherService.getWeatherFromApi(this.city).subscribe((weather) => {
      this.weather = weather;
      console.log(weather);
    });
  }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.storage.get('city').then((city) => {
      if (city === null) {
        this.weatherService.getWeatherFromApi('cancun').subscribe((weather) => {
          this.weather = weather;
          console.log('clima de cancun', weather);
        });
      } else {
        this.weatherService.getWeatherFromApi(city).subscribe((weather) => {
          this.weather = weather;
          console.log(weather);
        });
      }
    });
  }
}
