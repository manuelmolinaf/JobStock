import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/post.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {

  postsCollectionRef: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  model: Post;


  constructor(public afs: AngularFirestore) {

    this.postsCollectionRef = this.afs.collection<Post>('posts');
    this.posts = this.postsCollectionRef.snapshotChanges().pipe(map(actions => {

      return actions.map(action => {

        const data = action.payload.doc.data() as Post;
        const id = action.payload.doc.id;
        return {id, ...data};

      });

    }));

   }

   getPosts() {
    return this.posts;
  }


  addPost(post: Post) {

    this.model = {
      category: post.category,
      company: post.company,
      description: post.description,
      location: post.location,
      position: post.position,
      type: post.type,
      url: post.url,
    };

    this.postsCollectionRef.add(this.model);
  }

  updatePost(post: Post) {

    this.model = {
      category: post.category,
      company: post.company,
      description: post.description,
      location: post.location,
      position: post.position,
      type: post.type,
      url: post.url,
    };

    this.postsCollectionRef.doc(post.id).update(this.model);
  }

  deletePost(id: string) {
    this.postsCollectionRef.doc(id).delete();
  }
}
