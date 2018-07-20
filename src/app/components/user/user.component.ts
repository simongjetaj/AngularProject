import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:    string;
  age:     number;
  email:   string;
  address: Address;
  hobbies: string[];
  greeting: any;
  posts:   Post[];
  isEdit:  boolean = false;

  // whenever u want to use a service you have to inject it as a dependency
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.name = "Simon Gjetaj";
    this.age = 21;
    this.email = "gjetajsimon@gmail.com";
    this.address = {
      street: "lorem",
      city: "New York",
      state: "USA"
    };
    this.hobbies = ['Developing', 'Boxing', 'Listening to music'];
    this.greeting = true; // hello, 1 

    this.ds.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  addHobby(h) {
    this.hobbies.unshift(h);
    return false;
  }
 
  deleteHobby(h, i) {
    this.hobbies.splice(i, 1);
    // console.log(h, i);
    // return false;
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street: string,
  city:   string,
  state:  string
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}