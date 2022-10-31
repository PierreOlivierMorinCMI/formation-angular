import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-assesment",
  templateUrl: "./assesment.component.html",
  styleUrls: ["./assesment.component.css"],
})
export class AssesmentComponent implements OnInit {
  visible: boolean = false;
  events = [];
  constructor() {}

  ngOnInit(): void {}
  setVisible() {
    this.visible = !this.visible;
    this.events.push(new Date());
  }
  getColor(item){
    if(item > 4){
      return "blue";
    }
    else{
      return "transparent";
    } 

  }
}
