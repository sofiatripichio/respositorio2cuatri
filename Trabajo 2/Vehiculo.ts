export class Vehiculo {
    private marca: string;
    private modelo: string;
    private anio: number;
    /*definen tres propiedades privadas en la clase Vehiculo. Estas propiedades no son accesibles directamente 
    desde fuera de la clase, lo que significa que solo pueden ser 
    accedidas o modificadas a través de los métodos públicos (get y set).  */

    constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }/* constructor es un método especial que se ejecuta cuando se crea una nueva instancia de Vehiculo.
     Acepta tres parámetros (marca, modelo, y anio), que luego se asignan a las propiedades privadas de la clase utilizando this */

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string) {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string) {
        this.modelo = modelo;
    }

    public getAnio(): number {
        return this.anio;
    }

    public setAnio(anio: number) {
        this.anio = anio;
    }
}

/* Métodos get y set:

Los métodos get son funciones que permiten acceder a las propiedades privadas fuera de la clase.

getMarca(): string devuelve la propiedad marca.
getModelo(): string devuelve la propiedad modelo.
getAnio(): number devuelve la propiedad anio.

Los métodos set son funciones que permiten modificar las propiedades privadas desde fuera de la clase.
setMarca(marca: string) permite cambiar el valor de la propiedad marca.
setModelo(modelo: string) permite cambiar el valor de la propiedad modelo.
setAnio(anio: number) permite cambiar el valor de la propiedad anio.

Encapsulación: Los métodos get y set son parte del concepto de encapsulación en la programación orientada a objetos.
Aunque las propiedades son privadas, estos permiten controlar cómo se acceden o modifican esas propiedades. */

