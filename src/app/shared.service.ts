import { MobParts } from 'src/app/model/mob-part';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor(private _http: HttpClient) { }
  
    calProd(mobParts:any){
      let sumprods :number = 0;
      for(let mobPart of mobParts){
        sumprods  += mobPart.inStock;
      }
      return sumprods ;
    }
  getData() {
    // return this._http.get('./../../assets/api/data.json');
    
  }
}

