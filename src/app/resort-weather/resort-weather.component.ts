import {
    Component,
    Input,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-resort-weather',
    templateUrl: './resort-weather.component.html',
    styleUrls: ['./resort-weather.component.css']
})

export class ResortWeatherComponent implements OnInit {

    @Input()
    public temperature: {
        air: number,
        water: number
    };

    public constructor() {
    }

    public ngOnInit() {
    }
}
