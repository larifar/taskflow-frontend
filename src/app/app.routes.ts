import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TaskComponent } from './pages/task/task.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'task/:id', component:TaskComponent},
  {path:'user', component:UserComponent}
];
