import { Component, Input, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input() title:string = ' ';
  @Input() description:string = ' ';
  @Input() link:string = ' ';
  @Input() photo:string = ' ';
  @Input() id:string = '0'


  constructor(){

  }

  ngOnInit(): void {

  }

}
