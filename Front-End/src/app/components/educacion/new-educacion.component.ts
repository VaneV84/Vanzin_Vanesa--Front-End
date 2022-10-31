import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombre: string = '';
  descrip: string = '';
  fechaComienzo: number = 0;
  fechaFinal: number = 0;

  constructor(private educacionService: EducacionService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.nombre, this.descrip, this.fechaComienzo, 
      this.fechaFinal);
    this.educacionService.create(edu).subscribe(data => {
        alert("Educación agregada");
        this.router.navigate(['']); 
    }, err => {
      alert("Fallo al añadir la educación");
      this.router.navigate(['']);
    })
  }
}