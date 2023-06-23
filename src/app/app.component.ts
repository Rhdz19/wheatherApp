import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { WeatherComponent } from './components/weather/weather.component';
import { WeatherService } from './services/weather.service';

@Module({
  declarations: [AppComponent, WeatherComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), HttpClientModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor() {}
}
export class AppModule {}