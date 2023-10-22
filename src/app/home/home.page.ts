import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  users: any;

  constructor(private httpClient:HttpClient) {

    // httpClient es un objeto de una librería que se encarga de hacer operaciones con http
    this.users = this.httpClient.get('https://raw.githubusercontent.com/PabloMateosP/ACTIVIDAD1.14/master/src/app/home/MOCK_DATA.json');

  }

}
