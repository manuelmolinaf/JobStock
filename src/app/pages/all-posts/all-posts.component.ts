import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { FirestoreDataService } from '../../services/firestore-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: Observable<Post[]>;
  category: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private data: FirestoreDataService) {

    this.posts = this.data.getPosts();

   }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {

      this.category = params.category;

    });

    this.posts = this.data.getPosts();

  }



  toPost() {
    this.router.navigateByUrl('pages/post');
  }

  toDetails(id: string) {
    this.router.navigateByUrl('pages/post-details/' + id);
  }

  toHome() {
    this.router.navigateByUrl('pages/home');
  }

  toSearchResults(keyword: string) {

    this.router.navigateByUrl('pages/search-results/' + keyword);

  }

}
