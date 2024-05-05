import { Component } from '@angular/core';
import { CardService } from '../services/card/card.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  cards : any = []

  totalPrice : number = 0

  constructor( private cardService :CardService)
  {

  }

  ngOnInit()
  {
    this.cardService.getAllCards().subscribe((res : any)=> this.cards = res)

    this.totalPrice = this.cardService.getTotalPrice()


    
  }

  removeFromCard(card :any)
  {
    this.cardService.deleteCard(card)

  }

  increaseQuantity(card :any)
  {
    this.cardService.increaseQuantity(card)
  }


  decreaseQuantity(card :any)
  {
    this.cardService.decreaseQuantity(card)
  }

}
