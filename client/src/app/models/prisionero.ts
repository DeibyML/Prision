import { Persona } from './persona';

export class Prisionero extends Persona {
    _id: string;
    FechaNac: string;
    Raza: string;
    Sexo: string;
    Celda: string;
    Libre: boolean;
}
