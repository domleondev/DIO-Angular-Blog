import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{

  @Input()
  smallimageCover:string =""
  @Input()
  smallcardTitle:string =""
  @Input()
  smallcardDescription:string =""
  @Input()
  smallcardLink:string =""

  constructor() {}

  ngOnInit(): void {
    
  }

}
