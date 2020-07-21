import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient }    from '@angular/common/http';


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

  search(user: String){
    return this._http.get("https://api.github.com/search/users?q="+user + "&sort=score&order=desc");
  }

}
