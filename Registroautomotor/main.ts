import { Moto } from './Moto';
import { Camion } from './Camion';
import { Auto } from './Auto';
import { RegistroAutomotor } from './RegistroAutomotor';

// Crear instancia del RegistroAutomotor
const registro = new RegistroAutomotor();

// Crear vehículos
const moto1 = new Moto("ABC123", "X", "Yamaha", 2020);
const camion1 = new Camion("DEF456", "Z", "Mercedes", 2018);
const auto1 = new Auto("LVN497", "Peugeot", "297", 2015);
const auto2 = new Auto("AD232NQ", "Toyota", "Yaris", 2018);


// Agregar vehículos al registro
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(auto2);


// Listar todos los vehículos
registro.listarVehiculos();

// Modificar un vehículo
registro.modificarVehiculo("ABC123", "Honda", "X-2021", 2021);

// Listar vehículos nuevamente para ver cambios
registro.listarVehiculos();

// Dar de baja un vehículo
registro.darDeBaja("DEF456");

// Listar vehículos después de la baja
registro.listarVehiculos();
