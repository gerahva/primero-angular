import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2"
import { HttpClient } from '@angular/common/http'
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from '../../modelo/cliente';
import { Direccion } from '../../modelo/direccion';
import { Estatus } from '../../modelo/estatus';


@Component({
  selector: 'app-buscar-clientes',
  templateUrl: './buscar-clientes.component.html',
  styleUrls: ['./buscar-clientes.component.css']
})
export class BuscarClientesComponent implements OnInit {

  cliente: Cliente = {}
  direccion: Direccion = {}
  estatus?: Estatus = {}
  encontrado: boolean = false



  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  /*actualizar() {

    console.log("Probando la consolita")


    console.log("Estructura del json:" + JSON.stringify(this.cliente))

    this.http.put<Estatus>("https://actuario.herokuapp.com/api/cliente", this.cliente).subscribe(respuesta => {


      this.estatus = respuesta

      swal("ACTUALIZADO",
        this.estatus.mensaje,
        "success");

    })



  }
*/
  buscarPorId() {

    this.encontrado = false
    this.http.get<Cliente>("https://actuario.herokuapp.com/api/cliente/" + this.cliente.ident).subscribe(respuesta => {


      this.cliente = respuesta
      console.log(JSON.stringify(this.cliente))
      this.encontrado=true

    },
      error => {

        swal("NO EXISTE",
          "Cliente no encontrado",
          "error");


      }

    )


  }

}
