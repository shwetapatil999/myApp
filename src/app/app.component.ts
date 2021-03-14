import { Component } from '@angular/core';
import { MOBPARTS } from './data/mock';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  totalProd = 0;
  mp=MOBPARTS;

  constructor(private shared:SharedService){
    this.totalProd = shared.calProd(this.mp)
  }
}
