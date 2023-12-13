import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  users: any;
  filtro: string = "";

  constructor(private httpClient:HttpClient) {

    // httpClient es un objeto de una librería que se encarga de hacer operaciones con http
    this.users = this.httpClient.get('https://raw.githubusercontent.com/PabloMateosP/ACTIVIDAD1.14/master/src/app/home/MOCK_DATA.json');

  }

  //Intento de borrar usuario
  borrarContacto(user: any) {
    const index = this.users.indexOf(user);
    
    if (index > -1) {
      this.users.slice(index, 1);
    }
  }

}
