import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatime',
  templateUrl: './datatime.page.html',
  styleUrls: ['./datatime.page.scss'],
})
export class DatatimePage implements OnInit {
  fechanaci: Date =new Date();
  custonpickeroption={
    buttons:[

      {
        text:'hola',
        handler:(event)=>{
          console.log(event);
        }
      },
      {text:"mundo"}
    ]
  }
  constructor() { }

  ngOnInit() {
  }
cambiofecha(event){
  console.log(new Date(event.detail.value));
}
}
