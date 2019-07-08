import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { FirestoreDataService } from '../../services/firestore-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private router: Router, private data: FirestoreDataService) {

    this.posts = this.data.getPosts();

   }

  ngOnInit() {

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
