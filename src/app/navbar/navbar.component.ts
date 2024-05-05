import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CardService } from '../services/card/card.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    card : any = []

   cardLenght : number = 0

  constructor(private cardService :CardService)
  {
  }

  ngOnInit()
  {
    this.cardService.getAllCards().subscribe((res : any)=> this.card = res)


    this.cardLenght = this.card.length
  }

}
