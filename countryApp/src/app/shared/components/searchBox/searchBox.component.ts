import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

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
export class SearchBoxComponent implements OnInit,OnDestroy{

  

  private debouncer:Subject<string> = new Subject<string>();
  private debouncerSubscription?:Subscription;


    @Input()
    public placeholder:string = '';

    @Output()
    public onValue:EventEmitter<string> = new EventEmitter();

    @Output()
    public onDebounce:EventEmitter<string> = new EventEmitter();

    
    @ViewChild('txtInput')
    tagInput!: ElementRef<HTMLInputElement>
    
    
    ngOnInit(): void {
      this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(1000)
      )
      .subscribe (value =>{
        this.onDebounce.emit(value)
      })
    } 
    
    ngOnDestroy(): void {
      this.debouncerSubscription?.unsubscribe();
    }


    public onEnter():void{
        console.log("Ingreso")
        const term = this.tagInput.nativeElement.value;
        this.onValue.emit(term)
    }

    public onKeyPress(searchTerm:string):void{
        this.debouncer.next(searchTerm);
    }
}
