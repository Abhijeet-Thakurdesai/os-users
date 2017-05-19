import { AddeditComponent } from './addedit/addedit.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: UserListComponent },
  { path: 'overview/:id', component: OverviewComponent },
  { path: 'addedit', component: AddeditComponent },
  { path: 'addedit/:id', component: AddeditComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);