import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }
  serverId: number = 10;
  serverStatus: string = "offline";

  ngOnInit(): void {}
  getColor() {
    return this.serverStatus === "online" ? "green" : "red";
  }
}
