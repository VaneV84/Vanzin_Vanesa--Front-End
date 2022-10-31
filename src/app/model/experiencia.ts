export class Experiencia {
    id?: number;
    nombre: string;
    puesto: string;
    descrip: string;
    fechaComienzo: number;
    fechaFinal: number;

    constructor(nombre: string, puesto: string, descrip: string, 
        fechaComienzo: number, fechaFinal: number){
            this.nombre = nombre;
            this.puesto = puesto;
            this.descrip = descrip;
            this.fechaComienzo = fechaComienzo;
            this.fechaFinal = fechaFinal;
    }
}