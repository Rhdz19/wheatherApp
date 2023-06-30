import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from 'src/app/services/weather.service';
@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [],
  providers: [WeatherService]
})
export class HomePageModule {}
