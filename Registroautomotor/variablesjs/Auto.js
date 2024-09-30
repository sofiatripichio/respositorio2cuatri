"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
const Vehiculo_1 = require("./Vehiculo");
class Auto extends Vehiculo_1.Vehiculo {
    constructor(patente, modelo, marca, año) {
        super(patente, modelo, marca, año);
    }
    imprimirDatos() {
        console.log(`Auto: [Patente: ${this.getPatente()}, Marca: ${this.getMarca()}, Modelo: ${this.getModelo()}, Año: ${this.getAño()}]`);
    }
}
exports.Auto = Auto;
