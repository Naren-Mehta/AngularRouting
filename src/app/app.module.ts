import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

import {RouterModule , Routes} from '@angular/router'


const appRoutes: Routes =[
  {path : "home", component:HomeComponent},
  {path : "about", component:AboutComponent},

  {
    path:"user",
    children:[
      {
        path:"list",
        component:UserListComponent,
        children:
        [{path:"details/:userId", component:UserComponent}]
      }
    ]
  },
  {path : "", redirectTo: "/home", pathMatch:"full"},
  {path : "**", redirectTo: "/home", pathMatch:"full"}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
