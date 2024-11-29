import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardInputComponent } from "./card-input/card-input.component";
import { CardListComponent } from "./card-list/card-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardInputComponent, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp04_touama_mina';
}
