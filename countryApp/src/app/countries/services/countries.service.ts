import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService{

    private apiUrl :string = 'https://restcountries.com/v3.1';

    private getCountriesRequest(url:string):Observable<Country[]>{
      return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([])),
        //delay(2000),
      );
    }



    constructor(private http: HttpClient) { }

    searchCountryByAlphaCode(code:string):Observable<Country|null>{
      return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`).pipe(
        map(countries => countries.length>0? countries[0]:null),
        catchError( () => of(null))
      );
    }


    searchCapital(term:string):Observable<Country[]>{
        const url = `${this.apiUrl}/capital/${term}`;
        return this.getCountriesRequest(url);
    }

    //https://restcountries.com/v3.1/name/{name}
    searchCountry(term:string):Observable<Country[]>{
      const url = `${this.apiUrl}/name/${term}`;
      return this.getCountriesRequest(url);
      
    }

    //https://restcountries.com/v3.1/region/{region}
    searchRegion(region:string):Observable<Country[]>{
      const url = `${this.apiUrl}/region/${region}`;
      return this.getCountriesRequest(url);
    
    }
}