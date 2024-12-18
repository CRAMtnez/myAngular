import { Gifs } from './../../interfaces/gifs.interfaces';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service.ts.service';

@Component({
  selector: 'gifs-home-page',
  
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  standalone: false,
})
export class HomePageComponent { 

constructor( private gifsService:GifsService){
}

get gifs():Gifs[]{
    return this.gifsService.gifList;
}

}
