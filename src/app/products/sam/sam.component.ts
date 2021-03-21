import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sam',
  templateUrl: './sam.component.html',
  styleUrls: ['./sam.component.css']
})
export class SamComponent {
  // checkngif: boolean = true;

  // isvalid: boolean = true;
  // changeval(valid:any) {
  //   this.isvalid = valid;
  // }

  // btnClick() {
  //   alert('Dom change behaviour on click')  
  // }

  // ng for advanced track by
  students1: any[]; //var declare
  constructor() {
    this.students1 = [
      {
        'studentId1': 101,
        'name': 'shweta',
        'gender': 'female',
        'qualification': 'BE',
      },
      {
        'studentId1': 102,
        'name': 'Swara',
        'gender': 'female',
        'qualification': 'BE comp'
      },
      {
        'studentId1': 103,
        'name': 'Pinki',
        'gender': 'female',
        'qualification': 'BE It'
      },
      {
        'studentId1': 104,
        'name': 'Divya',
        'gender': 'female',
        'qualification': 'BE ENC'
      }
    ];
  }
  getmoreStudents(): void {
    this.students1 = [
      {
        'studentId1': 101,
        'name': 'shweta',
        'gender': 'female',
        'qualification': 'BE',
      },
      {
        'studentId1': 102,
        'name': 'Swara',
        'gender': 'female',
        'qualification': 'BE comp'
      },
      {
        'studentId1': 103,
        'name': 'Pinki',
        'gender': 'female',
        'qualification': 'BE It'
      },
      {
        'studentId1': 104,
        'name': 'Divya',
        'gender': 'female',
        'qualification': 'BE ENC'
      },
      {
        'studentId1': 105,
        'name': 'Divya',
        'gender': 'female',
        'qualification': 'BE ENC'
      }
    ];
  }
  trackbystudentId(index: number, students1: any): string{
    return students1.studentId1;
  }
}
