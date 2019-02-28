import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2"
import {HttpClient} from '@angular/common/http'
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from '../../modelo/cliente';
import { Direccion } from '../../modelo/direccion';
import { Estatus } from '../../modelo/estatus';


@Component({
  selector: 'app-guardar-cliente',
  templateUrl: './guardar-cliente.component.html',
  styleUrls: ['./guardar-cliente.component.css']
})
export class GuardarClienteComponent implements OnInit {
 
  cliente:Cliente={}
  direccion:Direccion={}
  estatus?:Estatus={}


 
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  guardar(){

console.log("Probando la consolita")

this.cliente.direccion=this.direccion
console.log("Estructura del json:"+JSON.stringify(this.cliente))

this.http.post<Estatus>("https://actuario.herokuapp.com/api/cliente",this.cliente).subscribe(respuesta=>{this.estatus=respuesta})

setTimeout(()=>{
  swal("Guardado",
    this.estatus.mensaje,
    "success");

},1500)

  
  }

}
