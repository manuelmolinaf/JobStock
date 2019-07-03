import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { FirestoreDataService } from '../../services/firestore-data.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    //posts: Observable<Post[]>;

    constructor(private data: FirestoreDataService) {

      //this.posts = this.data.getPosts();
   }

  ngOnInit() {
  }

  addPost(category: string, company: string,  description: string, location: string,  position: string, type: string,  url: string) {

    if (category === 'Design') {
      this.data.addDesignPost(new Post(category, company, description, location, position, type, url));
    } else {
      this.data.addProgPost(new Post(category, company, description, location, position, type, url));
    }
  }

}
