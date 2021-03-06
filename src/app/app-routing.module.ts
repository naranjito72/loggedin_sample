import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'users/:id', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'newUser', component: UserAddComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
