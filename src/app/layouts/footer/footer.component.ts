import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <p>The hero's birthday is {{ birthday | date:format }}</p>
  <button (click)="toggleFormat()">Toggle Format</button>
`,
  styles: [
  ]
})
export class FooterComponent {

  birthday = new Date(); 
  toggle = true; // start with true == shortDate

  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
}
