import { Auto } from './Auto'; /* importación permiten que tu archivo acceda a las clases definidas en otros*/
import { Moto } from './Moto';
import { Camion } from './Camion';

export class RegistroAutomotor {   /*define una clase RegistroAutomotor que tiene una propiedad privada vehiculos destinada 
    a almacenar un array de vehículos que pueden ser de tipo Auto, Moto o Camion. */
    private vehiculos: (Auto | Moto | Camion)[] = [];

    public agregarVehiculo(vehiculo: Auto | Moto | Camion): void {
        this.vehiculos.push(vehiculo);
    } /* push añade vehiculo nuevo al final del array*/

    public modificarVehiculo(index: number, vehiculo: Auto | Moto | Camion): void {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos[index] = vehiculo;
            /* index >= 0: Asegura que el índice no sea negativo.
            index < this.vehiculos.length: Asegura que el índice no exceda la longitud del array.
          Si el índice es válido, se asigna el nuevo objeto vehiculo a la posición especificada en el array vehiculos. 
          Reemplaza el vehículo existente en esa posición con el nuevo. */
        }
    }

    public darDeBaja(index: number): void {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos.splice(index, 1);
        } /* index >= 0: Verifica que el índice no sea negativo.
        index < this.vehiculos.length: Verifica que el índice sea menor a la longitud del array).
         Si ambas condiciones son verdaderas, se llama a splice(index, 1),
         que elimina el elemento en la posición index del array vehiculos.*/
    }

    public obtenerVehiculos(): (Auto | Moto | Camion)[] {
        return this.vehiculos;
    }
}

 /* */