import { Component, OnInit } from '@angular/core';
import { hys } from 'src/app/model/hys';
import { HysService } from 'src/app/service/hys.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  hys: hys[] = [];

  constructor(private hysService: HysService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHyS();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHyS():void{
    this.hysService.list().subscribe(
      data =>{
        this.hys = data;
      })
    }

  delete(id?: number){
    if(id != undefined){
      this.hysService.delete(id).subscribe(data =>{
        this.cargarHyS();
      }, err => {
        alert("No se pudo borrar la skill");
      }
      )
    }
  }
}