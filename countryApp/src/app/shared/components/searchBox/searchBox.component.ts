import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  
  templateUrl: './searchBox.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  standalone: false,
})
export class SearchBoxComponent { 


    @Input()
    public placeholder:string = '';

    @Output()
    public onValue:EventEmitter<string> = new EventEmitter();

    
    @ViewChild('txtInput')
    tagInput!: ElementRef<HTMLInputElement>
    
    

    
    
    public onEnter():void{
        console.log("Ingreso")
        const term = this.tagInput.nativeElement.value;
        this.onValue.emit(term)
    }

    /*public onKeyPress():void{
        this.term = this.tagInput.nativeElement.value;
        this.searchValue.emit(this.term)
    }*/
}
