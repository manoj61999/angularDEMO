import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

   

  cals = new FormGroup({
    firstNumber :new FormControl(''),
    secondNumber :new FormControl('')
  })
  
  add:any
  Addition: any;
  sub:any
  div:any
  multi:any
  subraction: any;
  multiplication: any;
  division: any;
  
  constructor(private route:ActivatedRoute,private router:Router,private data:DataService) { }

  ngOnInit(): void {
  }

  calfunction(){
    console.log(this.cals.value);
  }
  
  additionFun(){
    this.data.addCalculator(this.cals).subscribe((data: {}) => {
      console.log(data);
      this.add=data;
      this.Addition=this.add.Result;
    })
  }
  subractionFun(){
    this.data.subCalculator(this.cals).subscribe((data: {}) =>{
      console.log(data);
      this.sub = data;
      this.subraction=this.sub.Result;
    })
  }
  multiplicationFun(){
    this.data.multiCalculator(this.cals).subscribe((data: {}) =>{
      console.log(data);
      this.multi = data;
      this.multiplication = this.multi.Result;
    })
  }
  divisionFun(){
    this.data.diviCalculator(this.cals).subscribe((data: {}) =>{
      console.log(data);
      this.div = data;
      this.division = this.div.Result;
    })
  }
 
}
