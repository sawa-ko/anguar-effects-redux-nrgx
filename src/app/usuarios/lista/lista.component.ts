import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  public usuarios: UsuarioModel[] = [];

  constructor() {}

  ngOnInit(): void {
    /*this.usuario.getUsers().subscribe((data: any) => {
      this.usuarios = data;
    });*/
  }
}
