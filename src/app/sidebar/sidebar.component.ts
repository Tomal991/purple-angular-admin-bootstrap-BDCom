import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  @Input() sidebarStatus:boolean=false;
  list = [
    {
      id: 1,
      name: 'Dashboard',
      icon: 'fa-solid fa-house',
    },
    {
      id: 2,
      name: 'Basic UI Elements',
      icon: 'fa-solid fa-location-crosshairs',
    },
    {
      id: 3,
      name: 'Form elements',
      icon: 'fa-solid fa-bars',
    },
    {
      id: 4,
      name: 'Charts',
      icon: 'fa-solid fa-chart-column',
    },
    {
      id: 5,
      name: 'Tables',
      icon: 'fa-solid fa-table',
    },
    {
      id: 6,
      name: 'Icons',
      icon: 'fa-solid fa-users-between-lines',
    },
    {
      id: 7,
      name: 'Sample Pages',
      icon: 'fa-solid fa-briefcase-medical',
    },
  ];
  ngOnInit(): void {
   
  }
}
