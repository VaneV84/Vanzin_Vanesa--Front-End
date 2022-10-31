import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-new-idioma',
  templateUrl: './new-idioma.component.html',
  styleUrls: ['./new-idioma.component.css']
})
export class NewIdiomaComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private idiomaService: IdiomaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const idioma = new Idioma(this.nombre, this.porcentaje);
    this.idiomaService.create(idioma).subscribe(data => {
        alert("Idioma agregado");
        this.router.navigate(['']); 
    }, err => {
      alert("Fallo al añadir el idioma");
      this.router.navigate(['']);
    })
  }
}