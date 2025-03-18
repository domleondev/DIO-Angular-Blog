import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  imports: [],
  templateUrl: './menu-title.component.html',
  styleUrl: './menu-title.component.css'
})
export class MenuTitleComponent implements OnInit{

@Input()
contentMenutitle:string="";
constructor() {}

  ngOnInit(): void {
    
  }

}