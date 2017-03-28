import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

@Component({
    selector: 'app-resort-item',
    templateUrl: './resort-item.component.html',
    styleUrls: ['./resort-item.component.css']
})

export class ResortItemComponent {
    @Input()
    public resort: Resort;

    @Output()
    public onResortSelect: EventEmitter<{}> = new EventEmitter();
}
