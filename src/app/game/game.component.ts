import { Component } from '@angular/core';
import { Game } from '../start-screen/medels/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
pickCardAnimation = false; 
game!: Game;
currentCard: string = '';

ngOnInit(): void {
  this.newGame()
}

newGame(){
  this.game = new Game();
  console.log(this.game);
}

takeCard(){
  if(!this.pickCardAnimation){
    this.pickCardAnimation = true;
    let card = this.game.stack.pop();
    if(card !=undefined){
    this.currentCard = card;
    }

    console.log(this.currentCard)
    
    let interval = setInterval(() => {
      this.pickCardAnimation = false;
      clearInterval(interval);
    }, 2000);
  }
}

}
