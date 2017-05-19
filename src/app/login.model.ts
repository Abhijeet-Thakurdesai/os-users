export class LoginModel{
 private loginName : string;
 private password : string;
 private domainName = "openspecimen";

 constructor(loginName:string , password:string) {
    this.loginName=loginName;
    this.password=password;
 }


}