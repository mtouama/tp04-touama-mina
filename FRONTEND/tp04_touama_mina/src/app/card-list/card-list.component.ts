import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardService } from '../service/card.service';
import { FormsModule } from '@angular/forms';
import { CardFilterPipe } from '../pipes/card-filter.pipe';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CardFilterPipe],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent implements OnInit {
  cards$;
  searchTerm: string = '';

  constructor(private cardService: CardService) {
    this.cards$ = this.cardService.getCards();
  }

  ngOnInit(): void {}

  editCard(index: number): void { // la fonction existe mais elle sert à rien
    const updatedCard = {
      cardNumber: '1234567812345678', 
      cardName: 'Updated Name', 
      expiryDate: '12/34', 
      cvv: '123'
    };
    this.cardService.updateCard(index, updatedCard);
  }

  deleteCard(index: number): void {
    this.cardService.deleteCard(index);
  }
}