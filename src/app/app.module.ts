import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TrendingvideosComponent } from './trendingvideos/trendingvideos.component';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { SearchdummyComponent } from './searchdummy/searchdummy.component';
import { LogodummyComponent } from './logodummy/logodummy.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SearchresultComponent } from './searchresult/searchresult.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TrendingvideosComponent,
    SearchdummyComponent,
    LogodummyComponent,
    SidebarComponent,
    SearchresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
