import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    public resortList: [resort] = [
        {
            id: 0,
            city: 'Portu',
            country: 'Portugal',
            temperature: {
                air: 25,
                water: 17
            },
            followers: 145,
            following: 43,
        },
        {
            id: 1,
            city: 'Lisbon',
            country: 'Portugal',
            temperature: {
                air: 22,
                water: 16
            },
            followers: 355,
            following: 45,
        },
        {
            id: 2,
            city: 'Barcelona',
            country: 'Spain',
            temperature: {
                air: 29,
                water: 21
            },
            followers: 1754,
            following: 555,
        },
        {
            id: 3,
            city: 'Valencia',
            country: 'Spain',
            temperature: {
                air: 27,
                water: 22
            },
            followers: 343,
            following: 46,
        }
    ];

    public selectedResort: resort = this.resortList[0];

    public constructor() {
    }
}
