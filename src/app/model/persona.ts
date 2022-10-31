export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    puesto: string;
    intro: string;
    img: string;

    constructor(nombre: string, apellido: string, puesto: string, intro: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.puesto = puesto;
        this.intro = intro;
        this.img = img;
    }
}