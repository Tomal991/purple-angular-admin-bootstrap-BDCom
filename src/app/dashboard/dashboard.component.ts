import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  showBanner: boolean = true;
  toggleProBanner() {
    this.showBanner = !this.showBanner;
  }

  visitSaleChartData = [
    {
      label: 'CHN',
      data: [20, 40, 15, 35, 25, 50, 30, 20],
      borderWidth: 1,
      fill: false,
    },
    {
      label: 'USA',
      data: [40, 30, 20, 10, 50, 15, 35, 40],
      borderWidth: 1,
      fill: false,
    },
    {
      label: 'UK',
      data: [70, 10, 30, 40, 25, 50, 15, 30],
      borderWidth: 1,
      fill: false,
    },
  ];

  visitSaleChartLabels = ['2013', '2014', '2014', '2015', '2016', '2017'];

  visitSaleChartOptions = {
    responsive: true,
    legend: false,
  };

  trafficChartData = [
    {
      data: [30, 30, 40],
    },
  ];

  trafficChartLabels = ['Search Engines', 'Direct Click', 'Bookmarks Click'];

  trafficChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    legend: true,
  };
}
