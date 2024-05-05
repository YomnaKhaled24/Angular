import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(price: number, discountPercentage: number): number {

    const discountedPrice = price * (1-( discountPercentage / 100.0));

    
    return Math.round(discountedPrice);
  }

}
