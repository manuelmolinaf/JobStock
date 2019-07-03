import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {

  designPostsCollectionRef: AngularFirestoreCollection<Post>;
  designPosts: Observable<Post[]>;

  progPostsCollectionRef: AngularFirestoreCollection<Post>;
  progPosts: Observable<Post[]>;


  model: Post;


  constructor(public afs: AngularFirestore) {

    this.designPostsCollectionRef = this.afs.collection<Post>('designPosts');
    this.designPosts = this.designPostsCollectionRef.valueChanges();

    this.progPostsCollectionRef = this.afs.collection<Post>('progPosts');
    this.progPosts = this.progPostsCollectionRef.valueChanges();

   }

   getDesignPosts() {
    return this.designPosts;
  }



  addDesignPost(newPost: Post) {

    this.model = {
      category: newPost.category,
      company: newPost.company,
      description: newPost.description,
      location: newPost.location,
      position: newPost.position,
      type: newPost.type,
      url: newPost.url,
    };

    this.designPostsCollectionRef.add(this.model);
  }


  getProgPosts() {
    return this.progPosts;
  }



  addProgPost(newPost: Post) {

    this.model = {
      category: newPost.category,
      company: newPost.company,
      description: newPost.description,
      location: newPost.location,
      position: newPost.position,
      type: newPost.type,
      url: newPost.url,
    };

    this.progPostsCollectionRef.add(this.model);
  }
}
