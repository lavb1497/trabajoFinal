import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  nombre!:string
  usuario!:string

  consumirLocal(){
    this.nombre=String(localStorage.getItem('usuario'));
  }
}
