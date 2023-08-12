import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Display HomeComponent on the default URL
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'user/:id/posts', component: UserPostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
