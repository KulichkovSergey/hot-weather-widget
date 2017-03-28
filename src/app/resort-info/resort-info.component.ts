import {
    Component,
    EventEmitter,
    Input,
} from '@angular/core';

@Component({
    selector: 'app-resort-info',
    templateUrl: './resort-info.component.html',
    styleUrls: ['./resort-info.component.css']
})
export class ResortInfoComponent {

    @Input()
    public selectedResort: Resort;

    @Input()
    public onResortSelect: EventEmitter<{}> = new EventEmitter();
}
