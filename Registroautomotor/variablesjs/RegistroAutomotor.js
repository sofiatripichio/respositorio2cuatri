"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
class RegistroAutomotor {
    constructor() {
        this.vehiculos = [];
    }
    // Método para agregar vehículos
    agregarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
        console.log("Vehículo agregado exitosamente.");
    }
    // Método para listar todos los vehículos
    listarVehiculos() {
        console.log("Lista de Vehículos:");
        this.vehiculos.forEach((vehiculo) => vehiculo.imprimirDatos());
    }
    // Método para modificar un vehículo
    modificarVehiculo(patente, nuevaMarca, nuevoModelo, nuevoAño) {
        const vehiculo = this.vehiculos.find(v => v.getPatente() === patente);
        if (vehiculo) {
            vehiculo.setMarca(nuevaMarca);
            vehiculo.setModelo(nuevoModelo);
            vehiculo.setAño(nuevoAño);
            console.log("Vehículo modificado exitosamente.");
        }
        else {
            console.log("Vehículo no encontrado.");
        }
    }
    // Método para dar de baja un vehículo
    darDeBaja(patente) {
        this.vehiculos = this.vehiculos.filter(v => v.getPatente() !== patente);
        console.log(`Vehículo con patente ${patente} dado de baja.`);
    }
}
exports.RegistroAutomotor = RegistroAutomotor;
