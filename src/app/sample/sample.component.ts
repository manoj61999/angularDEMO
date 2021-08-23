import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  biodata = new FormGroup({
      firstName: new FormControl('',[Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('',[Validators.required, Validators.minLength(5)]),
      age: new FormControl('',[Validators.required]),
      number:new FormControl('',[Validators.required, Validators.minLength(10)]),
      Degree:new FormControl(''),
      DateoBirth:new FormControl(''),
      gender:new FormControl(['']),
      email: new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(8)]),
      password2:new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(8)]),
      Country:new FormControl(''),
      City:new FormControl(''),
      Address:new FormControl(''),
      Designation:new FormControl(''),
      Experiance:new FormControl(''),
      COCurriculam:new FormControl(''),
      PinCode:new FormControl('')
  });
  constructor(private route: ActivatedRoute,private router: Router,private data: DataService) { }

  ngOnInit(): void {
  }
  get getControl(){
    return this.biodata.controls;
  }
 

addUser() {
  console.log(this.biodata.value);
  this.data.addUser(this.biodata).subscribe((data: {}) => {
    //this.router.navigate(['/list'])
  })
}
}
