import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: [
  ]
})
export class PostsComponent implements OnInit {
  posts:any;

  constructor(private _http: HttpClient) {
  //   this._http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res) => {
  //   console.log('Res', res);
  //   this.posts = res;
  // });
}

  ngOnInit(): void {
  this._http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res) => {
        console.log(' res : ', res);
        this.posts = res;
      });
  }


}
