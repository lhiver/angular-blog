import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://ichef.bbci.co.uk/news/640/cpsprodpb/5367/production/_99315312_nasa.jpg"
  contentTitle:string = "Imagens ineditas do planeta vermelho"
  contentDescription:string = "Fotos tiradas por robô que posou em marte a 5 anos atrás"

  constructor() { }

  ngOnInit(): void {
  }

}
