import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ImagenService } from 'src/app/service/imagen.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: Persona = null;

  constructor(private personaService: PersonaService, 
    private activatedRoute: ActivatedRoute, private router: Router, 
    public imagenService: ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.find(id).subscribe(data =>{
      this.persona = data;
      }, err => {
      alert("Error al modificar datos personales");
      this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.persona.img = this.imagenService.url;
    this.personaService.update(id, this.persona).subscribe(data =>{
      this.router.navigate(['']);
      }, err => {
      alert("Error al modificar datos personales");
      this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any) {
    const name = "perfil_" + this.persona.apellido;
    this.imagenService.uploadImage($event, name);
  }
}