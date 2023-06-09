import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Input() sidebarStatus:boolean;
@Output() sidebarToggled=new EventEmitter<boolean>();
menuStatus:boolean=false

  ngOnInit(): void {
   
  }

  sidebarToggle(){
    this.menuStatus=!this.menuStatus;
this.sidebarToggled.emit(this.menuStatus);
  }
}