import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  test
  constructor() { }

  ngOnInit(): void {
  }

  pushTest(){
    this.test.push("this is a test")
  }
}
