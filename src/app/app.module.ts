import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { PostComponent } from './pages/post/post.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { AngularFireAuth } from '@angular/fire/auth';
import {AuthService} from '../app/services/auth.service';
import { AllPostsComponent } from './pages/all-posts/all-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PostComponent,
    PostDetailsComponent,
    SearchResultsComponent,
    EditPostComponent,
    AllPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore, AngularFireAuth, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
