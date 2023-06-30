import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports:[IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers: []
})
export class HomePage implements OnInit {
  public weather_data: any;
  public city: string = "";

  constructor(private weather_service: WeatherService) {}

  ngOnInit() {}

  getWeather() {
    this.weather_service.getWeatherFromApi(this.city).subscribe((data) => {
      this.weather_data = data;
    });
  }
}
