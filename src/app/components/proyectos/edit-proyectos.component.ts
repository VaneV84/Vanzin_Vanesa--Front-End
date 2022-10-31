import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImagenService } from 'src/app/service/imagen.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proyectos: Proyectos = null;

  constructor(private proyectosService: ProyectosService, 
    private activatedRoute: ActivatedRoute, private router: Router,
    public imagenService: ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectosService.find(id).subscribe(data =>{
      this.proyectos = data;
      }, err => {
      alert("Error al modificar proyecto");
      this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectos.img = this.imagenService.url;
    this.proyectosService.update(id, this.proyectos).subscribe(data =>{
      this.router.navigate(['']);
      }, err => {
      alert("Error al modificar proyecto");
      this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any) {
    const name = "proyecto_" + this.proyectos.nombre;
    this.imagenService.uploadImage($event, name);
  }
}