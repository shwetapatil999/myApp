import { MobParts } from 'src/app/model/mob-part';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
    calProd(mobParts:any){
      let sumprods :number = 0;
      for(let mobPart of mobParts){
        sumprods  += mobPart.inStock;
      }
      return sumprods ;
      }
    }

