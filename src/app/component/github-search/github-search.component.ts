import { Component, OnInit, TemplateRef } from '@angular/core';
import { GithubSearchService } from 'src/app/services/github-search.service';
// import 'rxjs/add/operator/map';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PrototypeGithubUser } from 'src/app/models/prototype-github-user';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {UserModalDetails} from 'src/app/models/user-modal-details';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss']
})
export class GithubSearchComponent implements OnInit {
  throttle = 100;
  scrollDistance = 1;
  scrollUpDistance = 4;
  username : String;
  modalRef: BsModalRef;
  githubUserArray :any[]= [];
  // currentItem : number = 0;
  numberOfItemsOnPage : number = 6;
  modalUser : UserModalDetails = new UserModalDetails();
  pageNumber : number = 1;
  display:boolean = false;
  isChecked : boolean = false;
  constructor(private _githubService: GithubSearchService, private modalService: BsModalService) { }
  
  ngOnInit(): void {
  }

  searchUser(pageNo : number){
    console.log(this.isChecked); 
    this._githubService.search(this.username,pageNo,this.isChecked).subscribe((users: any) => {
      // debugger;
      console.log(users);

      for(let user of users.items){
        this.githubUserArray.push(user);
      }
      console.log(this.githubUserArray.length);
      this.display = true;
    },
    (err)=>{
      console.log(err);
    },
    ()=>{
      console.log("done");
    });
  }

  showModal(template: TemplateRef<any>,user:any){
    this.modalUser.login = user.login;
    // console.log(this.modalUser.login);
    // console.log(user.repos_url);
    this.modalUser.repos = [];
    this._githubService.getRepos(user.repos_url).subscribe((repos:any)=>{
      for (let repo  of repos) {
        console.log(repo.name);
        if(!repo.private){
          this.modalUser.repos.push(repo.name);
        }
      }
    });
    this._githubService.getDetails(user.url).subscribe((profile:any)=>{
      console.log(profile);
      this.modalUser.followers=profile.followers;
      this.modalUser.following=profile.following;
      this.modalUser.createdOn=(new Date(profile.created_at)).toDateString();
      this.modalUser.admin=profile.site_admin;
    })

    this.modalRef = this.modalService.show(template);
  }

  onScrollDown(){
    this.pageNumber++;
    this.numberOfItemsOnPage+=6;
    this.searchUser(this.pageNumber);
  }

  defineOrder(){
    if(this.username!=null){
      this.githubUserArray =[];
      this.pageNumber=1;
      this.searchUser(this.pageNumber);
    }
  }

  // onUp(){
  //   this.pageNumber--;
  //   this.numberOfItemsOnPage-=24;
  //   this.searchUser(this.pageNumber);

  //   console.log("yippee");
  // }

  // onScrollDownAlt(){
  //   this.currentItem++;
  //   console.log(this.currentItem);
  //   console.log(this.pageNumber);
  //   console.log(this.numberOfItemsOnPage);
  //   if(this.currentItem > this.githubUserArray.length){
  //     this.pageNumber++;
  //     this.searchUser(this.pageNumber);
  //     this.numberOfItemsOnPage+=6;
  //     this.currentItem+=5
  //     console.log("yolo");
  //   }
  //   else{
  //     this.numberOfItemsOnPage+=6;
  //     this.currentItem+=5;
  //     console.log("yelp");
  //     console.log(this.currentItem);

  //   }
  // }
}
