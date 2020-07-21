import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './component/github-search/github-search.component';
import { GithubSearchResultComponent } from './component/github-search-result/github-search-result.component';

import { GithubSearchService} from "./services/github-search.service";

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    GithubSearchResultComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
