
export class UserForm {
    public id: number=0;
    public username: string
    public name: string;
    public email: string;
    public password: number;
    public age: number;
    
    constructor(id:number, username:string,name: string,email:string, password:number, age:number){
      this.id = id;
      this.username = username;
      this.age = age;
      this.name = name;
      this.email = email;
      this.password = password;
    }
  }
  