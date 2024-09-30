class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    } /*  constructor de la clase Vehiculo tiene tres parámetros: marca, modelo, y anio. 
    Estos valores se pasan cuando creas un nuevo objeto del tipo Vehiculo */
} 

class Auto extends Vehiculo {}
class Moto extends Vehiculo {}
class Camion extends Vehiculo {}
/*  las clases Auto, Moto y Camion heredan el constructor de Vehiculo, por lo que cualquier instancia 
de estas clases también tendrá marca, modelo, y anio. */


class RegistroAutomotor {
    constructor() {
        this.vehiculos = JSON.parse(localStorage.getItem('vehiculos')) || []; /*   */
    } /* recupera una lista de vehículos previamente guardados desde el localStorage. 
    Si no hay vehículos guardados, inicializa un array vacío ([]).
    El localStorage es un espacio de almacenamiento local del navegador que guarda datos incluso después de cerrar el navegador. */

    /* Funciones en RegistroAutomor.ts y js */
   
    agregarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
        this.guardarEnLocalStorage();
    } /* permite agregar un nuevo vehículo al array vehiculos y luego llama a guardarEnLocalStorage para actualizar el 
    localStorage con los cambios */

    modificarVehiculo(index, vehiculo) {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos[index] = vehiculo;
            this.guardarEnLocalStorage();
        } /* Modifica un vehículo en el array en el índice especificado. Si el índice es válido, 
        actualiza el vehículo y guarda los cambios en el localStorage.  */
    }

    darDeBaja(index) {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos.splice(index, 1);
            this.guardarEnLocalStorage();
        }/* Elimina un vehículo de la lista en el índice especificado si este es válido, y actualiza el localStorage.  */
    }

    guardarEnLocalStorage() {
        localStorage.setItem('vehiculos', JSON.stringify(this.vehiculos));
    }/* vehiculos en una cadena de texto utilizando JSON.stringify y lo guarda en localStorage.  */

    obtenerVehiculos() {
        return this.vehiculos;
    } /*  Devuelve el array vehiculos. */
}

const registro = new RegistroAutomotor();
const listaVehiculos = document.getElementById('listaVehiculos');
/* Se crea una instancia de la clase RegistroAutomotor llamada registro para gestionar la lista de vehículos.
Se obtiene una referencia al elemento HTML con el id listaVehiculos, que es donde se mostrarán los vehículos en pantalla.  */


function actualizarLista() {
    listaVehiculos.innerHTML = '';
    const vehiculos = registro.obtenerVehiculos();
/* limpia la lista de vehículos actual en el DOM (listaVehiculos.innerHTML = '';)
obtiene los vehículos del registro utilizando registro.obtenerVehiculos() y los itera con forEach.  */
    vehiculos.forEach((vehiculo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index}: ${vehiculo.marca} ${vehiculo.modelo} (${vehiculo.anio})`;
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.onclick = () => {
            registro.darDeBaja(index);
            actualizarLista();
        };

        li.appendChild(eliminarBtn);
        listaVehiculos.appendChild(li);
    });
}
/*para cada vehículo, se crea un elemento li que muestra la información del vehículo (marca, modelo, año) junto con un botón de eliminar.
El botón de eliminar tiene un evento onclick que llama a registro.darDeBaja(index) para eliminar el vehículo, 
y luego se actualiza la lista.  */

document.getElementById('agregar').onclick = () => {
    const tipo = document.getElementById('tipo').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const anio = parseInt(document.getElementById('anio').value); /*Obtiene los valores de los campos del formulario  */

    let vehiculo;
    if (tipo === 'Auto') {
        vehiculo = new Auto(marca, modelo, anio);
    } else if (tipo === 'Moto') {
        vehiculo = new Moto(marca, modelo, anio);
    } else if (tipo === 'Camion') {
        vehiculo = new Camion(marca, modelo, anio);
    }

    if (vehiculo) {
        registro.agregarVehiculo(vehiculo);
        actualizarLista();
        document.getElementById('vehiculoForm').reset(); 
    }
};/* Si el vehículo es válido, se agrega al registro con registro.agregarVehiculo(vehiculo) y se actualiza la lista con actualizarLista(). 
Después de agregar el vehículo, se limpia el formulario con reset().  */

document.getElementById('modificar').onclick = () => {
    const index = parseInt(document.getElementById('indexModificar').value);
    /* index es un valor entero que indica la posición del vehículo en la lista que vamos a modificar
    (basado en el índice del array this.vehiculos).  */ 
    const marca = document.getElementById('nuevaMarca').value;
    const modelo = document.getElementById('nuevoModelo').value;
    const anio = parseInt(document.getElementById('nuevoAnio').value);
    const tipo = document.getElementById('tipoModificar').value;
/*  la función se ejecuta cuando cuando se hace click en el boton y modifica un vehículo en el registro 
Obtiene el índice del vehículo a modificar y los nuevos valores del formulario.
Dependiendo del tipo seleccionado, crea una nueva instancia de Auto, Moto, o Camion y la utiliza para modificar el vehículo en el registro.  */
    let vehiculo;
    if (tipo === 'Auto') {
        vehiculo = new Auto(marca, modelo, anio);
    } else if (tipo === 'Moto') {
        vehiculo = new Moto(marca, modelo, anio);
    } else if (tipo === 'Camion') {
        vehiculo = new Camion(marca, modelo, anio);
    }

    if (vehiculo) {
        registro.modificarVehiculo(index, vehiculo);
        actualizarLista(); /* Si se creó correctamente un objeto vehiculo,
         se llama al método modificarVehiculo del registro  método modificarVehiculo recibe el índice del vehículo a modificar 
         y la nueva instancia del vehículo con los valores actualizados. */

    }
};


actualizarLista();
/* vuelve a generar la lista de vehículos y la muestra actualizada, reflejando los cambios que el usuario hizo.  */
