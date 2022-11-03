import { Component, Input, OnInit } from '@angular/core';
import { IBoard, IPreparedGraph } from "../store/interfaces";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {

  @Input() board!: IBoard;

  graphData!: IPreparedGraph;
  isGraphShow = false;

  constructor() { }

  ngOnInit(): void {}

  openGraph() {
    this.isGraphShow = !this.isGraphShow;
  }

}
