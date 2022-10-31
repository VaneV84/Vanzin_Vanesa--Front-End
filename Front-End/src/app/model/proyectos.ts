export class Proyectos {
    id?: number;
    nombre: string;
    fecha: number;
    descrip: string;
    img: string;

    constructor(nombre: string, fecha: number, descrip: string, img: string){
            this.nombre = nombre;
            this.fecha = fecha;
            this.descrip = descrip;
            this.img = img;
    }
}