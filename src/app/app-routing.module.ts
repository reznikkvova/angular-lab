import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './components/login/login.component'
import { NewsComponent } from './components/news/news.component'
import { ProfileComponent } from './components/profile/profile.component'
import { AuthGuard } from './core/guards/auth.guard'

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/news'},
  {path: 'news', component: NewsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
