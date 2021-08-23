import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  Orderdetails = new FormGroup({
    orderid : new FormControl(''),
    productname : new FormControl(''),
    productquantity : new FormControl(''),
    productprice : new FormControl(''),
    totalprice : new FormControl(''),
    Address : new FormControl('')
  })


  constructor(private route:ActivatedRoute,private router:Router,private data:DataService) { }

  ngOnInit(): void {
  }

  getOrder() {
    console.log(this.Orderdetails.value);
    this.data.addOrder(this.Orderdetails).subscribe((data: {}) => {
      //this.router.navigate(['/list'])
    })

}
}
