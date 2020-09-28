import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
   
  data =[
    {
      name:'primary',
      selected:'false'
    },{
      name:'secondary',
      selected:'true'
    },{
      name:'danger',
      selected:'false'
    },
    {
      name:'tertiary',
      selected:'true'
    }
  ]
  constructor() { }

  ngOnInit() {
  }
onClick(item:any){
console.log(item);
}
verdata(){
  console.log(this.data);
}
}
