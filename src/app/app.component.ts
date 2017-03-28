import {Component} from '@angular/core';

import {resorts} from './shared/data/resorts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    public resortList: Resort[] = resorts;

    public selectedResort: Resort = this.resortList[0];
}
