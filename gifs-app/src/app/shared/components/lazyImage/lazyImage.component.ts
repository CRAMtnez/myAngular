import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  
  templateUrl: './lazyImage.component.html',
  standalone: false,
})
export class LazyImageComponent implements OnInit{
  

  @Input()
  public url!:string;

  @Input()
  public alt:string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error("Necesita URL!!!")
  } 



  onLoad(){
    console.log("Image loaded");
    this.hasLoaded = true;
  }
}
