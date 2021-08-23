import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }

  orderby:any;
  ngOnInit(): void {
    this.route.queryParams
  .subscribe(params => {
    console.log(params); // { orderby: "price" }
    this.orderby = params;
    console.log(this.orderby); // price
  });
  }

}
