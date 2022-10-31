import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  exp: Experiencia = null;

  constructor(private experienciaService: ExperienciaService, 
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.find(id).subscribe(data =>{
      this.exp = data;
      }, err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.update(id, this.exp).subscribe(data =>{
      this.router.navigate(['']);
      }, err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
      }
    )
  }
}