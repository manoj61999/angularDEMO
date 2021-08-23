import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component,OnDestroy,OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';



@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})

export class PracticeComponent implements OnInit {
  userdetails = new FormGroup({
    userName:new FormControl(''),
    password:new FormControl('')
  });
  
  name=""
  orderby: any;
constructor() { }

ngOnInit() {
};

  loginFunction(){
    console.log(this.userdetails.value);
  }

  showData($event: any){
    this.name="the button is clicked"
    console.log("button clicked")

  }
}


