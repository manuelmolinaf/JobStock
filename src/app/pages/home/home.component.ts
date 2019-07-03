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

  progPosts: Observable<Post[]>;
  designPosts: Observable<Post[]>;

  constructor(private router: Router, private data: FirestoreDataService) {

    this.progPosts = this.data.getProgPosts();
    this.designPosts = this.data.getDesignPosts();

   }

  ngOnInit() {
  }

  toPost() {
    this.router.navigateByUrl('pages/post');
  }

}
