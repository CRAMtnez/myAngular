import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SearchBoxComponent } from '../../../shared/components/searchBox/searchBox.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  
  public countries: Country[] = [];

  public isLoading = false;


  constructor(private countriesService:CountriesService){

  }

    searchByCapital(term:string):void{
        this.isLoading = true;
        this.countriesService.searchCapital(term).subscribe( countries =>{
          this.countries = countries;
          this.isLoading = false;
        })
        
    }
}
