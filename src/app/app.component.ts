import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';



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
  imports: [IonicModule,HttpClientModule, AppRoutingModule], 
  providers: [],

})
export class AppComponent {
  constructor() {}
}
export class AppModule {}