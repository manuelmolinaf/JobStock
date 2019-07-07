import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { FirestoreDataService } from '../../services/firestore-data.service';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  posts: Observable<Post[]>;
  keyword: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private data: FirestoreDataService, private router: Router) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {

      this.keyword = params.keyword;

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

  find(location: string, position: string, company: string)
  {
    let key = this.keyword;

    key = key.toLowerCase();

    console.log(company + '  ' + key);

    if (location.toLowerCase().includes(key) || position.toLowerCase().includes(key) || company.toLowerCase().includes(key)) {
      return true;
    } else {

      return false;
    }
  }

}
