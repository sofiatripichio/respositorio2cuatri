"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const Vehiculo_1 = require("./Vehiculo");
class Moto extends Vehiculo_1.Vehiculo {
    constructor(patente, modelo, marca, año) {
        super(patente, modelo, marca, año);
    }
    imprimirDatos() {
        console.log(`Moto: [Patente: ${this.getPatente()}, Marca: ${this.getMarca()}, Modelo: ${this.getModelo()}, Año: ${this.getAño()}]`);
    }
}
exports.Moto = Moto;
