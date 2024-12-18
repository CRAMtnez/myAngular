import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service.ts.service';

@Component({
  selector: 'gifs-search-box',
  
  template: `
  <h5>Buscar:</h5>
  <input type = "text" class="form-control"
  placeholder="Buscar gifts..."
  (keyup.enter)="searchTag()"
  #txtTagInput
  >
  `,
  styleUrl: './search-box.component.css',
  standalone: false,
})
export class SearchBoxComponent { 

    @ViewChild('txtTagInput')
    tagInput!: ElementRef<HTMLInputElement>

    constructor( private gifsService:GifsService){

    }


    searchTag(){
        const newTag = this.tagInput.nativeElement.value;
        this.gifsService.searchTag(newTag);
        console.log(this.gifsService.tagsHistory);
        this.tagInput.nativeElement.value = "";
    }
}
