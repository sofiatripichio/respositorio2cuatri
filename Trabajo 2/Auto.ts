import { Vehiculo } from './Vehiculo'; /*  importa la clase Vehiculo desde otro módulo llamado Vehiculo. 
Esto permite que la clase herede de Vehiculo */

export class Auto extends Vehiculo {
    constructor(marca: string, modelo: string, anio: number) {
        super(marca, modelo, anio);
        /* se declara una nueva clase que puede ser importada 
        extends Vehiculo: indica que auto es una subclase de Vehiculo 
        constructor es un método  que se llama cuando se crea una nueva instancia de la clase.
el constructor acepta tres parámetros:marca modelo anio*/
    }
}


