import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { FirestoreDataService } from '../../services/firestore-data.service';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  posts: Observable<Post[]>;
  postId: string;
  private sub: any;
  post: Post;

  filled: boolean;
  submitted: boolean;

  constructor(private route: ActivatedRoute, private data: FirestoreDataService, private router: Router) {

    this.filled = true;
    this.submitted = false;
   }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {

      this.postId = params.id;

    });

    this.posts = this.data.getPosts();



  }

  editPost(category: string, company: string,  description: string, location: string,  position: string, type: string,  url: string,
           id: string) {

      if (category !== 'Choose...' && company !== '' && description !== '' &&
          location !== '' && position !== '' && type !== '' && url !== '') {

      this.filled = true;
      this.submitted = true;

      this.data.updatePost(new Post(category, company, description, location, position, type, url, id));

    } else {

      this.filled = false;

    }

  }


  toHome() {
    this.router.navigateByUrl('pages/home');
  }


}
