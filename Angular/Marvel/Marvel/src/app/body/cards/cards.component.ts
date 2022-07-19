import { Component, OnInit } from '@angular/core';
import { RickService } from '../Service/rick.service';
import { Personagens } from './interface/personagem';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  personagens: Personagens
  Allpersonagens = this.rickSvc.getPersonagens()
  
  constructor(private rickSvc: RickService) { }

  ngOnInit(): void {
  }

}
