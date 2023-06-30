import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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

  public weather_form = new UntypedFormGroup({
    city: new FormControl("", Validators.required),
  });
  public weather: Object;
  public city: string;

  search(formData: FormData) {
    console.log("formData: ", formData);
    this.storage.set("city", formData["city"]);

    this.weatherService
      .getWeatherFromApi(formData["city"])
      .subscribe((weather) => {
        this.weather = weather;
        console.log(weather);
      });
  }


  getWeather() {
    this.storage
      .get("city")
      .then((city) => {
        if (city === null) {
          this.weatherService
            .getWeatherFromApi("cancun")
            .subscribe((weather) => {
              this.weather = weather;
              console.log("clima de cancun", weather);
            });
        } else {
          this.weatherService.getWeatherFromApi(city).subscribe((weather) => {
            this.weather = weather;
            console.log(weather);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


}
