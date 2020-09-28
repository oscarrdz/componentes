import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import {componente} from '../../interfaces/interfaces'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
 componentes:Observable<componente[]>;

  constructor(private menuCtrl:MenuController,
    private dataservices:DataService) { }

  ngOnInit() {
    this.componentes=this.dataservices.getMenuOpts();
  }
  mostrarMenu(){
this.menuCtrl.open('first');
  }
}
