import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/admin/login/login.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { BasicApplicationFormComponent } from './component/user/basic-application-form/basic-application-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { AddTokenInterceptor } from './interceptor/add-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    BasicApplicationFormComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
