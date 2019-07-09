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

  filled: boolean;
  submitted: boolean;

  constructor(private route: ActivatedRoute, private data: FirestoreDataService, private router: Router) {

    this.filled = true;
    this.submitted = false;
    this.posts = this.data.getPosts();

    this.sub = this.route.params.subscribe(params => {

      this.postId = params.id;

    });

   }

  ngOnInit() {

  }

  editPost(category: string, company: string,  description: string, location: string,  position: string, type: string,  url: string,
           id: string) {

      if (category !== 'Choose...' && company !== '' && description !== '' &&
          location !== '' && position !== '' && type !== 'Choose...' && url !== '') {

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

  conLog(s:string) {

    console.log(s);

  }


}
