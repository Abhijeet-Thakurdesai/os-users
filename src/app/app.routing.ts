import { AddComponent } from './add/add.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: UserListComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);