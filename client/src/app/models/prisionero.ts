import { Persona } from './persona';

export class Prisionero extends Persona {
    _id: string;
    FechaNac: Date;
    Raza: string;
    Sexo: string;
    Celda: string;
    Libre: boolean;
}
