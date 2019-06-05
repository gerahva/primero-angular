import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2"
import {HttpClient} from '@angular/common/http'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../modelo/cliente';
import { Direccion } from '../../modelo/direccion';
import { Estatus } from '../../modelo/estatus';
import { CustomValidators } from 'ng2-validation';
import { Globales } from '../../modelo/globales';


@Component({
  selector: 'app-guardar-cliente',
  templateUrl: './guardar-cliente.component.html',
  styleUrls: ['./guardar-cliente.component.css']
})
export class GuardarClienteComponent implements OnInit {
 
  cliente:Cliente={}
  direccion:Direccion={}
  estatus?:Estatus={}
  formularioGuardar:FormGroup

 
  constructor(private http:HttpClient, private fb:FormBuilder) { }

  ngOnInit() {
    this.formularioGuardar=this.fb.group({
      fnombre: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15)
        ])
      ],
      fiden:[
        null,
   
          Validators.compose([Validators.required, CustomValidators.number])
          
          //CustomValidators.fiden('IN')
      
      ],
      femail: [
        null,
        Validators.compose([Validators.required, CustomValidators.email])
      ],
      fdirecc: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25)
        ])
      ],
      fcpost: [
        null,
        Validators.compose([
          Validators.required,
          CustomValidators.number,
          Validators.minLength(5),
          Validators.maxLength(5)
          
        ])
      ],
      fmuni: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(25)
        ])
      ]
      
    })
  }

  guardar(){

console.log("Probando la consolita")

this.cliente.direccion=this.direccion
console.log("Estructura del json:"+JSON.stringify(this.cliente))

this.http.post<Estatus>(Globales.urlGlobal+"cliente",this.cliente).subscribe(respuesta=>{this.estatus=respuesta
 swal(this.estatus.mensaje,
    this.estatus.mensaje,
    "success");
})


  
  }

}
