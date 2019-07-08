import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { FirestoreDataService } from '../../services/firestore-data.service';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  posts: Observable<Post[]>;
  postId: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private data: FirestoreDataService, private router: Router) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {

      this.postId = params.id;

    });

    this.posts = this.data.getPosts();

  }


  toPost() {
    this.router.navigateByUrl('pages/post');
  }

  deletePost() {
    this.data.deletePost(this.postId);

    const rout = this.router;

// tslint:disable-next-line: only-arrow-functions
    setTimeout( function() {
      rout.navigateByUrl('pages/home');
    }, 400);

  }

  toHome() {
    this.router.navigateByUrl('pages/home');
  }

  toSearchResults(keyword: string) {

    this.router.navigateByUrl('pages/search-results/' + keyword);

  }

  toEditPost(id: string) {

    this.router.navigateByUrl('pages/edit-post/' + id);

  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
