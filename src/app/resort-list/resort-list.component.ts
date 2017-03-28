import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

@Component({
    selector: 'app-resort-list',
    templateUrl: './resort-list.component.html',
    styleUrls: ['./resort-list.component.css']
})

export class ResortListComponent {

    @Input()
    public resortList: Resort[];

    @Input()
    public selectedResort: Resort;

    public countries: string[] = ['All', 'Portugal', 'Spain'];

    private _selectedCountry: string = this.countries[0];

    public setSelectedCountry(country: string): void {
        this._selectedCountry = country;
    }

    public isSelectedCountry(country: string): boolean {
        return this._selectedCountry === country;
    }

    @Output()
    public onResortSelect: EventEmitter<{}> = new EventEmitter();
}
