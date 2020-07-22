export class UserModalDetails {
    login : String;
    repos : any[];
    followers : number;
    following : number;
    createdOn : String;
    admin : boolean;
    constructor(){
        this.login="";
        this.repos=[];
        this.followers= NaN;
        this.following=NaN;
        this.createdOn="";
        this.admin=false;
    }
}
