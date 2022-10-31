import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { Proyectos } from 'src/app/model/proyectos';
import { ImagenService } from 'src/app/service/imagen.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombre: string = '';
  fecha: number = 0;
  descrip: string = '';
  img: string = '';

  constructor(private proyectosService: ProyectosService, private router: Router, 
    private activatedRoute: ActivatedRoute, public imagenService: ImagenService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.img = this.imagenService.url;
    const proy = new Proyectos(this.nombre, this.fecha, this.descrip, this.img);
    this.proyectosService.create(proy).subscribe(data => {
      alert("Proyecto agregado");
      this.router.navigate(['']); 
    }, err => {
      alert("Error al añadir el proyecto");
      this.router.navigate(['']);
    })
  }

  uploadImage($event:any) {
    const name = "proyecto_" + this.nombre;
    this.imagenService.uploadImage($event, name);
  }
}