import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { PostComponent } from './pages/post/post.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { AllPostsComponent } from './pages/all-posts/all-posts.component';


const routes: Routes = [
  {path: '', redirectTo: 'pages/login', pathMatch: 'full' },
  {path: 'pages/home', component: HomeComponent},
  {path: 'pages/login', component: LoginComponent},
  {path: 'pages/register', component: RegisterComponent},
  {path: 'pages/post', component: PostComponent},
  {path: 'pages/post-details/:id', component: PostDetailsComponent},
  {path: 'pages/search-results/:keyword', component: SearchResultsComponent},
  {path: 'pages/edit-post/:id', component: EditPostComponent},
  {path: 'pages/all-posts/:category', component: AllPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


