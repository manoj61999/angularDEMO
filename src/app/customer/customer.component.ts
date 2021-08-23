import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerdata= new FormGroup({
    customerName : new FormControl(''),
    customerID : new FormControl(''),
    email : new FormControl(''),
    serialNo : new FormControl(''),
    productID : new FormControl(''),
    productName :new FormControl(''),
    mode:new FormControl(['']),
  })


  constructor(private route: ActivatedRoute,private router: Router) { }


  ngOnInit(): void {
  }
  customerDetails(){
    console.log(this.customerdata.value);
    this.router.navigate(['wishlist'],{ queryParams: {
      customerName : this.customerdata.value.customerName,
      customerID : this.customerdata.value.customerID,
      email : this.customerdata.value.email,
      serialNo : this.customerdata.value.serialNo,
      productID : this.customerdata.value.productID,
      productName :this.customerdata.value.productName,
      mode :this.customerdata.value.mode
    }});
  }

}
