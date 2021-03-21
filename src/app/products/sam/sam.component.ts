import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sam',
  templateUrl: './sam.component.html',
  styleUrls: ['./sam.component.css']
})
export class SamComponent {
  checkngif: boolean = true;

  isvalid: boolean = true;
  changeval(valid:any) {
    this.isvalid = valid;
  }
  
  btnClick() {
    alert('Dom change behaviour on click')  
  }
}
