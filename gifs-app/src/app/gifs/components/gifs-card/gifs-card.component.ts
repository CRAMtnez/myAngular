import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css',
  standalone:false,
})
export class GifsCardComponent implements OnInit {
    
  @Input()
  public gif!:Gifs;
    
  ngOnInit(): void {
    if (!this.gif) throw new Error("Gif property is requiered")
    
  }

   

}
