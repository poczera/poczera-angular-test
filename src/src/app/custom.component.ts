import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom',
  template: `<h1>{{header}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class CustomComponent  {
  @Input() name: string;
}
