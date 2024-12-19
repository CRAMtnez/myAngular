import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SearchBoxComponent } from '../../../shared/components/searchBox/searchBox.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
    

    searchByCapital(term:string):void{
        console.log('Desde ByCapitalPage');
        console.log({term});
    }
}
