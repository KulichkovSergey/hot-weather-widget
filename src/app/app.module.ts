import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {ResortWeatherComponent} from './resort-weather/resort-weather.component';
import {ResortInfoComponent} from './resort-info/resort-info.component';
import {ResortListComponent} from './resort-list/resort-list.component';

@NgModule({
    declarations: [
        AppComponent,
        ResortWeatherComponent,
        ResortInfoComponent,
        ResortListComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
