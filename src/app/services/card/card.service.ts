import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private card = new BehaviorSubject<any[]>([]);

  
  
  constructor() { }

  getAllCards()
  {
    return this.card.asObservable()
  }

  getLenghthCard()
  {
    // return this.card.value.length()
    // return this.card.asObservable().length()

  }

  addCard(cardItem : any)
  {
    const cards = this.card.value;
    // console.log(cards)

    const cardIndex = cards.findIndex(card => card.id === cardItem.id);

    if (cardIndex !== -1) {
      const updatedCards = [...cards];
      updatedCards[cardIndex].quantity += 1;
      updatedCards[cardIndex].stock -= 1;
      this.card.next(updatedCards);
      console.log(this.card)
    } 
    else {
      const updatedCard = { ...cardItem, quantity: 1, stock: cardItem.stock - 1 };
      this.card.next([...cards, updatedCard]);
      console.log(this.card)
    }

  }

  deleteCard( cardItem : any )
  {
    const updatedCard = this.card.value.filter( card => card.id !== cardItem.id);
    this.card.next(updatedCard);

  }

  increaseQuantity(cardItem : any)
  {
    const cards = this.card.value;
    // console.log(cards)

    const cardIndex = cards.findIndex(card => card.id === cardItem.id);

    if (cardIndex !== -1) {
      const updatedCards = [...cards];

      if(updatedCards[cardIndex].stock > 0)
      {
        updatedCards[cardIndex].quantity += 1;
        updatedCards[cardIndex].stock -= 1;

        this.card.next(updatedCards);
      }

    }

  }

  decreaseQuantity(cardItem : any)
  {
    const cards = this.card.value;
    // console.log(cards)

    const cardIndex = cards.findIndex(card => card.id === cardItem.id);

    if (cardIndex !== -1) {

      const updatedCards = [...cards];
      if(updatedCards[cardIndex].quantity > 1)
      {
        updatedCards[cardIndex].quantity -= 1;
        updatedCards[cardIndex].stock += 1;

      }

    }
    
  }

  getTotalPrice() {
    const cards = this.card.value;
    let totalPrice = 0;
    for (const card of cards) {
      totalPrice += card.price * card.quantity;
    }

    return totalPrice;
  }
}
