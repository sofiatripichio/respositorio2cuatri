export class Vehiculo {
    private patente: string;
    private modelo: string;
    private marca: string;
    private año: number;

    constructor(patente: string, modelo: string, marca: string, año: number) {
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
        this.año = año;
    }

    public getPatente(): string {
        return this.patente;
    }

    public setPatente(patente: string): void {
        this.patente = patente;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getAño(): number {
        return this.año;
    }

    public setAño(año: number): void {
        this.año = año;
    }

    public imprimirDatos(): void {
        console.log(`Vehículo: [Patente: ${this.patente}, Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}]`);
    }
}
