import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberIncremented = new EventEmitter<number>();
  number = 0;
  gameRef;

  constructor() {

  }

  ngOnInit(): void {
  }

  start() {
    console.log('Start');
    this.gameRef = setInterval(() => {
      this.number++;
      this.numberIncremented.emit( this.number);
    }, 1000);
  }

  increment() {
    console.log('incremented');
    this.number++;
    this.numberIncremented.emit( this.number);
  }

  end() {
    clearInterval(this.gameRef);
  }
}
