import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hys } from 'src/app/model/hys';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-edit-hys',
  templateUrl: './edit-hys.component.html',
  styleUrls: ['./edit-hys.component.css']
})
export class EditHysComponent implements OnInit {
  hys: hys = null;

  constructor(private hysService: HysService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.hysService.find(id).subscribe(data =>{
      this.hys = data;
      }, err => {
      alert("Error al modificar la skill");
      this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.hysService.update(id, this.hys).subscribe(data =>{
      this.router.navigate(['']);
      }, err => {
      alert("Error al modificar la skill");
      this.router.navigate(['']);
      }
    )
  }
}