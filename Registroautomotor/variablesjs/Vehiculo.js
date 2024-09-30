"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(patente, modelo, marca, año) {
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
        this.año = año;
    }
    getPatente() {
        return this.patente;
    }
    setPatente(patente) {
        this.patente = patente;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getAño() {
        return this.año;
    }
    setAño(año) {
        this.año = año;
    }
    imprimirDatos() {
        console.log(`Vehículo: [Patente: ${this.patente}, Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}]`);
    }
}
exports.Vehiculo = Vehiculo;
