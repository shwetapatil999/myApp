import { MobParts } from './model/mob-part';
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

  // totalProd = 0;
  // mp:any;

  constructor(private shared:SharedService){
    // this.totalProd = shared.calProd(this.mp);
    
    // shared.getData().subscribe((data: any) => {
    //   console.log('data:', data['mobdata']);
    //   this.mp = data['mobdata'];
    // });
  }
}
