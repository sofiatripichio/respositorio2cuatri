import { Vehiculo } from './Vehiculo'; 

export class Camion extends Vehiculo {
    constructor(marca: string, modelo: string, anio: number) {
        super(marca, modelo, anio);
    }/* se declara una nueva clase que puede ser importada 
        extends Vehiculo: indica que camion es una subclase de Vehiculo 
        constructor es un método  que se llama cuando se crea una nueva instancia de la clase.
el constructor acepta tres parámetros:marca modelo anio*/
}

