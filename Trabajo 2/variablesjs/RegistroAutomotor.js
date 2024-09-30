export class RegistroAutomotor {
    constructor() {
        this.vehiculos = [];
    }
    agregarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
    }
    modificarVehiculo(index, vehiculo) {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos[index] = vehiculo;
        }
    }
    darDeBaja(index) {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos.splice(index, 1);
        }
    }
    obtenerVehiculos() {
        return this.vehiculos;
    }
}
