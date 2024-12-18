import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService{

    public gifList:Gifs[] = [];

    private _tagHistory: string[] = [];
    private apiKey:string = 'EvgObD3D8WLXTp2Yw2XHDMnhS35wuev4';
    private serviceURL: string = "https://api.giphy.com/v1/gifs";

    constructor( private http: HttpClient) {
        this.loadLocalStorage();
     }


    get tagsHistory():string[]{
        return [...this._tagHistory];
    }

    private organizeHistory(tag:string):void{
        tag = tag.toLowerCase();

        if( this._tagHistory.includes(tag)){
            this._tagHistory = this._tagHistory.filter(
                (elemento) => elemento !== tag
            )
        }

        this._tagHistory.unshift(tag);
        this._tagHistory = this._tagHistory.splice(0,10);
        this.saveLocalStorage();

    }

    private saveLocalStorage():void{
        localStorage.setItem('history',JSON.stringify(this._tagHistory))
    }

    private loadLocalStorage():void{
        if (!localStorage.getItem('history')) return;
        this._tagHistory = JSON.parse(localStorage.getItem('history')!);
        if (this._tagHistory.length > 0){
            this.searchTag(this._tagHistory[0]);
        }else return;
    }


    searchTag(tag:string):void{
        
        if (tag.length === 0) return;
        this._tagHistory.unshift(tag);
        
        //if(this._tagHistory.length != 0) 
        this.organizeHistory(tag);

        const params = new HttpParams()
        .set('api_key',this.apiKey)
        .set('limit','10')
        .set('q',tag)

        let url:string = `${this.serviceURL}/search`;
        //console.log(this._tagHistory)
        //fetch('https://api.giphy.com/v1/gifs/search?api_key=EvgObD3D8WLXTp2Yw2XHDMnhS35wuev4&q=valorant&limit=10')
        //.then (resp => resp.json())
        //.then (data => console.log(data));

        this.http.get<SearchResponse>(url,{params}).subscribe(
            respuesta => {
                this.gifList = respuesta.data;
            }
        )
    }

}
