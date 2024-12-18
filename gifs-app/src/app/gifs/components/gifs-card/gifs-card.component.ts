import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css',
  standalone:false,
})
export class GifsCardComponent {

    @Input()
    public gifs:Gifs[] = [];
 }
