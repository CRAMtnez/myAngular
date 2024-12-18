import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service.ts.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: false,
})
export class SidebarComponent {

    constructor(private gifsService : GifsService){

    }

    public getTagsHistory():string[]{
        return this.gifsService.tagsHistory
    }

    public refreshTags(tag:string):void{
        this.gifsService.searchTag(tag)
    }

 }
