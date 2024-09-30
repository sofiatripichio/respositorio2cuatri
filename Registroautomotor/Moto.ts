import { Vehiculo } from './Vehiculo';

export class Moto extends Vehiculo {
    constructor(patente: string, modelo: string, marca: string, año: number) {
        super(patente, modelo, marca, año);
    }

    public imprimirDatos(): void {
        console.log(`Moto: [Patente: ${this.getPatente()}, Marca: ${this.getMarca()}, Modelo: ${this.getModelo()}, Año: ${this.getAño()}]`);
    }
}
