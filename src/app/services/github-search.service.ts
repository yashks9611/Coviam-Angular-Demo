import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { formatCurrency } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  private userName: string;
    // private clientId: string = '<Client Id>';
    // private clientSecret: string = '<Client Secret Key>';
    private clientId: string = '';
    private clientSecret: string = '';
  constructor(private _http: HttpClient) { 
    this.userName = '';
  }

  search(user: any,page : number){
    return this._http.get("https://api.github.com/search/users?q="+user + "&sort=score&order=desc&page=" + page+"&per_page=6");
  }

  getRepos(reposUrl : any){
    // console.log(this._http.get(reposUrl));
    return this._http.get(reposUrl);
  }

  getDetails(profileUrl : any){
    return this._http.get(profileUrl);
  }

}
