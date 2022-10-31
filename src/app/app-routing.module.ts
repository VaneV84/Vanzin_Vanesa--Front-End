import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditHysComponent } from './components/hys/edit-hys.component';
import { NewHysComponent } from './components/hys/new-hys.component';
import { EditIdiomaComponent } from './components/idioma/edit-idioma.component';
import { NewIdiomaComponent } from './components/idioma/new-idioma.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'newedu', component: NewEducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'newhys', component: NewHysComponent},
  { path: 'edithys/:id', component: EditHysComponent},
  { path: 'editper/:id', component: EditAcercaDeComponent},
  { path: 'newidioma', component: NewIdiomaComponent},
  { path: 'editidioma/:id', component: EditIdiomaComponent},
  { path: 'newproyecto', component: NewProyectosComponent},
  { path: 'editproyecto/:id', component: EditProyectosComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}