import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {ResortWeatherComponent} from './resort-weather/resort-weather.component';
import {ResortInfoComponent} from './resort-info/resort-info.component';
import {ResortListComponent} from './resort-list/resort-list.component';
import {ResortCountryPipe} from "./shared/pipes/resort-country.pipe";
import {ResortItemComponent} from './resort-list/resort-item/resort-item.component';

@NgModule({
    declarations: [
        AppComponent,
        ResortWeatherComponent,
        ResortInfoComponent,
        ResortListComponent,
        ResortCountryPipe,
        ResortItemComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}
