import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
usuarios:Observable<any>;
@ViewChild(IonList) ionlist:IonList;

  constructor(private dataService:DataService) { }

  ngOnInit() {
   this.usuarios=this.dataService.getusuarios();
   this.dataService.getusuarios().subscribe(console.log);
  }
favorite(user:any){
console.log(user);
this.ionlist.closeSlidingItems();
}
  share(user:any){
console.log(user);
this.ionlist.closeSlidingItems();
  }
  delete(user:any){
  console.log(user.username);
  this.ionlist.closeSlidingItems();
  }


}
