import {
    Pipe,
    PipeTransform
} from '@angular/core';

@Pipe({
    name: 'resortCountry'
})

export class ResortCountryPipe implements PipeTransform {

    public transform(resorts: Resort[], country: string): Resort[] {
        return country == 'All' ?
            resorts :
            resorts.filter((resort: Resort) => resort.country == country);
    }

}
