import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  @Input() photo:string = ''
  @Input() title:string = ''
  @Input() description:string = ''

  private id:string | null = '0'

  constructor(
    private route:ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = (value.get('id')))

      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null ){
    const result = dataFake.filter(article => article.id == id)[0]

    this.title = result.title
    this.description = result.description
    this.photo = result.photo

  }

}


