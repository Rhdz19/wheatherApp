import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormControl, UntypedFormGroup, Validators } from "@angular/forms";

const apiKey = "1fd2cb8c6867c77aab1a440e4e6bce4f";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(
    private http: HttpClient,
    private storage: Storage
    ) {}

  getWeatherFromApi(city: string) {
    return this.http.get(
      `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
    );
  }




}
