import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombre: string = '';
  puesto: string = '';
  descrip: string = '';
  fechaComienzo: number = 0;
  fechaFinal: number = 0;

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombre, this.puesto, this.descrip, 
    this.fechaComienzo, this.fechaFinal);
      this.experienciaService.create(expe).subscribe(data => {
        alert("Experiencia agregada");
        this.router.navigate(['']); 
      }, err => {
        alert("Fallo al añadir la experiencia");
        this.router.navigate(['']);
    })
  }
}