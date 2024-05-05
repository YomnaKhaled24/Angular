import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Products from '../../assets/products-list2.json'
import { NgbCarouselConfig , NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StarsComponent } from '../stars/stars.component';
import { DiscountPipe } from '../pipes/discount/discount.pipe';
import { CardService } from '../services/card/card.service';
import { ProductRequestService } from '../services/product-request/product-request.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgbCarouselModule ,StarsComponent , DiscountPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  // providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers

})
export class ProductDetailsComponent {

  // products: any = Products

  productDetails:any;

  // showNavigationArrows = false;
	// showNavigationIndicators = false;

  constructor(private productRequestService :ProductRequestService,private activatedRoute :ActivatedRoute ,private cardService :CardService
    // , config: NgbCarouselConfig
  )
  {
    // config.showNavigationArrows = true;
		// config.showNavigationIndicators = true;
  }

  ngOnInit()
  {
    // console.log(this.activatedRoute.snapshot.params['id'])

    const param_id = this.activatedRoute.snapshot.params['id']
    // this.productDetails = this.products.default.find((product:any) => product.id === Number(param_id))
    //  console.log(this.productDetails)

    this.productRequestService.getProductDetails(param_id).subscribe((res)=> this.productDetails = res)
  }

  addToCard(card : any)
  {
    this.cardService.addCard(card);

  }
}
