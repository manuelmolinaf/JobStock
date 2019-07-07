import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { FirestoreDataService } from '../../services/firestore-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  filled: boolean;
  submitted: boolean;


    constructor(private data: FirestoreDataService, private router: Router) {

      this.filled = true;
      this.submitted = false;

   }

  ngOnInit() {
  }

  toHome() {
    this.router.navigateByUrl('pages/home');
  }

  addPost(category: string, company: string,  description: string, location: string,  position: string, type: string,  url: string) {

    if (category !== 'Choose...' && company !== '' && description !== ''
        && location !== '' && position !== '' && type !== '' && url !== '') {

        this.filled = true;
        this.submitted = true;

        this.data.addPost(new Post(category, company, description, location, position, type, url));

      //   if (category === 'Design') {
      //   this.data.addDesignPost(new Post(category, company, description, location, position, type, url));
      // } else {
      //   this.data.addProgPost(new Post(category, company, description, location, position, type, url));
      // }

    } else {

      this.filled = false;

    }

  }

}
