import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';

@Component({
    selector: 'app-resort-list',
    templateUrl: './resort-list.component.html',
    styleUrls: ['./resort-list.component.css']
})

export class ResortListComponent implements OnInit {

    @Input()
    public resortList: resort[];

    @Input()
    public selectedResort: resort;

    @Output()
    public onResortSelect: EventEmitter<{}> = new EventEmitter();

    public constructor() {
    }

    public  ngOnInit() {
    }

}
