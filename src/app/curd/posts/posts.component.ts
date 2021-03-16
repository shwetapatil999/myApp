import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: [
    `table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    .crossTable{
      height:200px;
      overflow-x:scroll;
    }`
  ]
})
export class PostsComponent implements OnInit {
  posts: any;
  count: any;
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) {
    //   this._http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res) => {
    //   console.log('Res', res);
    //   this.posts = res;
    // });
  }

  ngOnInit(): void {
    this._http.get(this.url).subscribe((res) => {
      console.log(' res : ', res);
      this.posts = res;
    });
  }
  createPost(newTitle: any) {
    console.log('newTitle', newTitle); //get all html tag
    console.log('newTitle', newTitle.value);// get data whatever you enter

    let post: any = { title: newTitle.value };

    this._http.post(this.url, post).subscribe((res) => {
      console.log('res', res);
      post = res;
      this.count += post;
      console.log("this count", this.count);

      console.log('post data', post);
      console.log('res data', post);

      this.posts.push(post);
      //this.posts.splice(0, 0, post);
    });
  }
  updatePost(post: any) {
    console.clear();
    console.log(' post : ', post);

    let obj = {
      id: 1,
      userId: 10,
      title: 'dummy data',
      body: 'some text',
    };
    this._http
      .patch(this.url + '/' + post.id, { title: 'dummy data' })
      .subscribe((res) => {
        console.log('res', res);

        let index = this.posts.indexOf(post);
        console.log('HttpPostsComponent -> updatePost -> index', index);

        let updatedPost = res; //{
        // id: res.json().id,
        // title: res.json().title,
        // userId: res.json().userId,
        // body: res.json().body,
        //};
        this.posts.splice(index, 1, updatedPost);
      });
  }

}
