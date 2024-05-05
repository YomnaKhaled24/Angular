import { Component } from '@angular/core';
 import * as Products from '../../assets/products-list2.json'
import { TruncatePipe } from '../pipes/truncate/truncate.pipe';
import { Router } from '@angular/router';
import { ProductRequestService } from '../services/product-request/product-request.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [TruncatePipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // products: any = Products

  products : any ;
  
  constructor( private router:Router , private productRequestService :ProductRequestService)  //we must inject this service into constructor
  {
    // console.log(this.products)
    // console.log(this.products.default)
  }

  ngOnInit()
  {
    this.productRequestService.getProductList().subscribe((res)=> this.products = res)
  }

  handleNavigateToDetails( id :number)
  {
    this.router.navigate(['details',id])

  }

}
