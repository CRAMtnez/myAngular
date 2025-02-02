import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  
  templateUrl: './countryTable.component.html',
  styles: `
    :host {
      display: block;
    }
    img{
      width: 25px;
    }
  `,
  standalone: false,
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];


}
