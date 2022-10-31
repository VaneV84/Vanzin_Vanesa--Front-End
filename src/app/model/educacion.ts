export class Educacion {
    id?: number;
    nombre: string;
    descrip: string;
    fechaComienzo: number;
    fechaFinal: number;

    constructor(nombre: string, descrip: string, fechaComienzo: number,
        fechaFinal: number){
        this.nombre = nombre;
        this.descrip = descrip;
        this.fechaComienzo = fechaComienzo;
        this.fechaFinal = fechaFinal;
    }
}