import { Component, OnInit } from '@angular/core';
import { RickService } from '../service/rick.service';
import { Personagens } from './interface/personagem';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  personagens: Personagens
  Allpersonagens = this.rickSvc.getPersonagens()
  constructor(private rickSvc: RickService) { }

  ngOnInit(): void {
  }

}
