import { Component, OnInit } from '@angular/core';
import { MOBPARTS } from 'src/app/data/mock';
import { MobParts } from 'src/app/model/mob-part';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  title:string = "Angular Project"
  constructor() { }
  
  mobParts: MobParts[] = MOBPARTS; //???????????????????????????

  ngOnInit(): void {
  }

  calc(eve:any){
    console.log(eve)
    return eve
  }

  upQt(mobPart:any){
    mobPart.quantity++
  }
  downQt(mobPart:any){
    mobPart.quantity++
  }

}
