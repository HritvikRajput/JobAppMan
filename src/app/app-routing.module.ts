import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { LoginComponent } from './component/admin/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { BasicApplicationFormComponent } from './component/user/basic-application-form/basic-application-form.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin', children: [
      { path: 'login', component: LoginComponent },
      { path: 'home', component: AdminHomeComponent,  }
    ]
  },
  {
    path: 'user', children: [
      { path: 'apply', component: BasicApplicationFormComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
