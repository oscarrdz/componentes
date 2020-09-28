import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getusuarios(){
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
  getMenuOpts(){
    return this.http.get<componente[]>('/assets/data/menu-opts.json');
  }

}
