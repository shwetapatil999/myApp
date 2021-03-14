import { Component, OnInit } from '@angular/core';
import { MOBPARTS } from 'src/app/data/mock';
import { MobParts } from 'src/app/model/mob-part';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  title: string = "Angular Project"
  
    constructor(private shared:SharedService){  
    shared.getData().subscribe((data: any) => {
      console.log('data:', data['mobdata']);
      this.mobParts = data['mobdata'];
    });
  }
  
  mobParts: MobParts[] = MOBPARTS; //???????????????????????????

  ngOnInit(): void {
  }

  calc(eve?:any){
    console.log(eve)  
    return eve
  }

  upQt(mobPart:any){
    if (mobPart.quantity < mobPart.inStock) mobPart.quantity++;
  }
  downQt(mobPart:any){
    if (mobPart.quantity > 0) mobPart.quantity--;
  }

}
