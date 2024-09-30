import { Vehiculo } from './Vehiculo';

export class Camion extends Vehiculo {
    constructor(patente: string, modelo: string, marca: string, año: number) {
        super(patente, modelo, marca, año);
    }

    public imprimirDatos(): void {
        console.log(`Camión: [Patente: ${this.getPatente()}, Marca: ${this.getMarca()}, Modelo: ${this.getModelo()}, Año: ${this.getAño()}]`);
    }
}
