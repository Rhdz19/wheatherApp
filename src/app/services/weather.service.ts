import { HttpClient } from '@angular/common/http';


const apiKey = '1fd2cb8c6867c77aab1a440e4e6bce4f';

export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get(
      `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
    );
  }

}