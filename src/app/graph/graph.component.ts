import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from "chart.js";
import { RequestService } from "../services/request.service";

Chart.register(...registerables);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit {

  @Input() boardId!: number;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  barChartData: ChartConfiguration<'bar'>['data'] | null = null;

  constructor(private requestService: RequestService,) {}

  ngOnInit(): void {
    this.requestService.requestGraph(this.boardId).subscribe(
      (preparedGraph) => {
        this.barChartData = preparedGraph
      },
    )
  }

}
