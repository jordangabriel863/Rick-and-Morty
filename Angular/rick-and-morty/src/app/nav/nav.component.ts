import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  img = "../../assets/img/eickandmorty.png"
  title = "../../assets/img/name.png"

  constructor() { }

  ngOnInit(): void {
  }

}
