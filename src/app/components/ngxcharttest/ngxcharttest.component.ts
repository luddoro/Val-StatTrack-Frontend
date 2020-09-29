import { Component, OnInit, Input } from '@angular/core';
import { killsChartData } from './chartData';
@Component({
  selector: 'app-ngxcharttest',
  templateUrl: './ngxcharttest.component.html',
  styleUrls: ['./ngxcharttest.component.scss']
})
export class NgxcharttestComponent implements OnInit {



  /*Inputs for graph data. Passed in site components */

  @Input() Datapoint: String;

  /* variables for  graphs. single = data arrays, view = Graph size */
  killsChartData: any[];
  view: any[] = [500, 400];

  /* options for graphs */
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  legendPosition: string = 'below';
  colorScheme = {
    domain: ['#de1039', '#e3e3e3', '#f587a6', '#7aa3e5', '#a730e2a', '#210c12']
  };
  constructor() {
    Object.assign(this, { killsChartData });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));

  }

  ngOnInit(): void {
  }

}
