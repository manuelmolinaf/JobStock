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
  postsToShow: Post[];

  designCount: number;
  progCount: number;

  constructor(private router: Router, private data: FirestoreDataService) {

    this.posts = this.data.getPosts();

    this.postsToShow = [];

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

  addProgCount() {

    this.progCount++;
  }

  addDesignCount() {

    this.designCount++;

    console.log(this.designCount);
  }

  getJobsByCategory(cat: string): Post[] {

    this.posts.subscribe(list => {
      this.postsToShow = list;
    });

    return this.postsToShow.filter(job => job.category === cat);
  }

}
