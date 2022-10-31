import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hys } from 'src/app/model/hys';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private hysService: HysService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const Hys = new hys(this.nombre, this.porcentaje);
    this.hysService.create(Hys).subscribe(data => {
        alert("Skill agregada");
        this.router.navigate(['']); 
    }, err => {
      alert("Fallo al añadir la skill");
      this.router.navigate(['']);
    })
  }
}