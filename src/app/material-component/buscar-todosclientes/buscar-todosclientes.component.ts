import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../modelo/cliente';
import { MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-buscar-todosclientes',
  templateUrl: './buscar-todosclientes.component.html',
  styleUrls: ['./buscar-todosclientes.component.css']
})
export class BuscarTodosclientesComponent implements OnInit {

  clientes: Cliente[] = []
  totales:number

  dataSource = new MatTableDataSource(this.clientes);
  
  displayedColumns: string[] = ['ident', 'nombre', 'mail', 'calle'];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("una y otra vez")

    this.http.get<Cliente[]>('https://actuario.herokuapp.com/api/cliente').subscribe(
      res => {
        this.clientes = res
   this.dataSource=new MatTableDataSource(this.clientes);
   this.totales=this.clientes.length
    
      }
    )
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}