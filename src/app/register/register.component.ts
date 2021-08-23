import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public name ="";



  constructor(private route: ActivatedRoute,private router: Router ){}

  

  onClickSubmit(result: { firstname: string; lastname: string ; password:string ;psw2:string ; Address:String ; dob:string ;email:string ;mobile:number ;$event:any}) {
    console.log("name : " + result.firstname + result.lastname);
    console.log("password :"+result.password);
    console.log("Re-password :"+result.psw2);
    console.log("Address :"+result.Address);
    console.log("DateofBirth :"+result.dob);
    console.log("email :"+result.email);
    console.log("mobile number :"+result.mobile);
   

    if(result.password!=result.psw2){
      this.name="check your password !!!";
    }else{
      this.name =" ";
    }
    
 }
  ngOnInit(): void {
    
  }
}
