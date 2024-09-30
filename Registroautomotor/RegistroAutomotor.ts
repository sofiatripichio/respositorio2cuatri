import { Vehiculo } from './Vehiculo';

export class RegistroAutomotor {
    private vehiculos: Vehiculo[] = [];

    // Método para agregar vehículos
    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
        console.log("Vehículo agregado exitosamente.");
    }

    // Método para listar todos los vehículos
    public listarVehiculos(): void {
        console.log("Lista de Vehículos:");
        this.vehiculos.forEach((vehiculo) => vehiculo.imprimirDatos());
    }

    // Método para modificar un vehículo
    public modificarVehiculo(patente: string, nuevaMarca: string, nuevoModelo: string, nuevoAño: number): void {
        const vehiculo = this.vehiculos.find(v => v.getPatente() === patente);
        if (vehiculo) {
            vehiculo.setMarca(nuevaMarca);
            vehiculo.setModelo(nuevoModelo);
            vehiculo.setAño(nuevoAño);
            console.log("Vehículo modificado exitosamente.");
        } else {
            console.log("Vehículo no encontrado.");
        }
    }

    // Método para dar de baja un vehículo
    public darDeBaja(patente: string): void {
        this.vehiculos = this.vehiculos.filter(v => v.getPatente() !== patente);
        console.log(`Vehículo con patente ${patente} dado de baja.`);
    }
}
