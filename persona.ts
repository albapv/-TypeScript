class Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleanios: string;
  colorFavorito: string;
  sexo: string;
  
  constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanios: string, colorFavorito: string, sexo: string) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleanios = cumpleanios;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
  }
}

export default Persona;
