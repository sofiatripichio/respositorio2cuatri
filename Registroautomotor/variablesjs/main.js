"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Moto_1 = require("./Moto");
const Camion_1 = require("./Camion");
const Auto_1 = require("./Auto");
const RegistroAutomotor_1 = require("./RegistroAutomotor");
// Crear instancia del RegistroAutomotor
const registro = new RegistroAutomotor_1.RegistroAutomotor();
// Crear vehículos
const moto1 = new Moto_1.Moto("ABC123", "X", "Yamaha", 2020);
const camion1 = new Camion_1.Camion("DEF456", "Z", "Mercedes", 2018);
const auto1 = new Auto_1.Auto("LVN497", "Peugeot", "297", 2015);
const auto2 = new Auto_1.Auto("AD232NQ", "Toyota", "Yaris", 2018);
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
