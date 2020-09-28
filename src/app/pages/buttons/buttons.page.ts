import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  constructor() { }
 favorito:boolean=false;
  ngOnInit() {
  }
  metodoprueba(){
    this.favorito=!this.favorito;
    console.log("primer boton oprimido");
  }
}
