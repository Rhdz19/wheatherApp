import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';




// @Module({
//   declarations: [AppComponent, WeatherComponent],
//   entryComponents: [],
//   imports: [BrowserModule, IonicModule.forRoot(), HttpClientModule],
//   providers: [WeatherService],
//   bootstrap: [AppComponent],
// })

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule,HttpClientModule], 
  providers: [WeatherService],

})
export class AppComponent {
  constructor() {}
}
export class AppModule {}