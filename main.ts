import Persona from './persona';
import Direccion from './direccion';
import Telefono from './telefono';
import Mail from './mail';

// Crear registros
const persona1 = new Persona("Juan", "Pérez", 30, "12345678A", "01/01/1990", "Azul", "Masculino");
const persona2 = new Persona("María", "García", 25, "87654321B", "15/05/1995", "Rojo", "Femenino");
const persona3 = new Persona("Carlos", "López", 40, "98765432C", "10/10/1980", "Verde", "Masculino");

// Mostrar registros
console.log("Registros de personas:");
console.log(persona1);
console.log(persona2);
console.log(persona3);

// Modificar registro de persona por DNI
if (persona2.dni === "87654321B") {
  const nuevaDireccion = new Direccion("Calle Nueva", 10, "2º", "A", "28000", "Madrid", "Madrid");
  const nuevoMail = new Mail("Personal", "maria@mail.com");
  const nuevoTelefono = new Telefono("Móvil", "123456789");
  
  persona2.direcciones = [nuevaDireccion
