import { Injectable } from '@angular/core';
import { getDownloadURL, list, ref, Storage, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenService{
  url: string = '';

  constructor(private storage: Storage) {}

  //Método para subir imagenes a firebase
  public uploadImage($event: any, name:string){
    //captura la imagen en constante file
    const file = $event.target.files[0];
    //captura la ruta donde se guarda imagen en firebase
    const imgRef = ref(this.storage,`imagenes/` + name);
    //método que sube la imagen a la base de datos
    uploadBytes(imgRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error))
  }

  //Método para descargar imagen desde firebase
  getImages(){
    const imagesRef = ref(this.storage, 'imagenes');
    list(imagesRef)
      .then(async response => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log("La URL es: " + this.url);
        }
      })
      .catch(error => console.log(error));
  }
}