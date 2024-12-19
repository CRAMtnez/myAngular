import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-contact-page',
  
  templateUrl: './contactPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  standalone: false,
})
export class ContactPageComponent { }