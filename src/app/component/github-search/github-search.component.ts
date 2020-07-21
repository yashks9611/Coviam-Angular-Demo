import { Component, OnInit, Input } from '@angular/core';
import { GithubSearchService } from 'src/app/services/github-search.service';
// import 'rxjs/add/operator/map';

import { GithubUser } from 'src/app/models/protoGithubUser';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss']
})
export class GithubSearchComponent implements OnInit {

  githubUser: GithubUser;
  username : String;
  constructor(private _githubService: GithubSearchService) { }

  ngOnInit(): void {
  }

  searchUser(){
    this._githubService.search(this.username).subscribe(user=>{
      console.log(user);
    },
    (err)=>{
      console.log(err);
    },
    ()=>{
      console.log("done");
    });
  }
}
