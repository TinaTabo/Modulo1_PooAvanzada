//-- Importar clases
import { Person } from "./person";
import { Profesion } from "./person";

//-- Pruebas
let persona1:Person = new Person("Cris","Española",Profesion.developer,3);
let persona2:Person = new Person("Manuel","Española",Profesion.director,20);
let persona3:Person = new Person("Mari","Española",Profesion.tester,11);
let persona4:Person = new Person("Oliver","Española",Profesion.manager,7);
let persona5:Person = new Person("Cris","Española",Profesion.developer,3);

console.log(`----------------EQUAL-PERSONS-----------------`);

console.log(`¿ persona1 es igual a persona2 ?: ${persona1.equalPersons(persona2)}`);
console.log(`¿ persona1 es igual a persona5 ?: ${persona1.equalPersons(persona5)}`);

console.log(`----------------------------------------------`);


console.log(`--------------PRINT-ATTRIBUTES----------------`);

console.log(`-------persona1-------`);
persona1.printAttributes();
console.log(`-------persona2-------`);
persona2.printAttributes();
console.log(`-------persona3-------`);
persona3.printAttributes();
console.log(`-------persona4-------`);
persona4.printAttributes();
console.log(`-------persona5-------`);
console.log(`Los datos actuales de persona5 son iguales que los de persona1: `);
console.log(`name = ${persona5.getName()}`);
console.log(`nationality = ${persona5.getNationality()}`);
console.log(`profession = ${persona5.getProfession()}`);
console.log(`experienceYears = ${persona5.getExperienceYears()}`);

console.log(`-------------Cambiando datos...-----------`);
persona5.setName("Taehyung");
persona5.setNationality("South Korean");
persona5.setProfession(Profesion.developer);
persona5.setExperienceYears(10);
persona5.printAttributes();

console.log(`----------------------------------------------`);


console.log(`-------------------TO-STRING------------------`);

console.log(`-------persona1-------`);
console.log(persona1.toString());
console.log(`-------persona2-------`);
console.log(persona2.toString());
console.log(`-------persona3-------`);
console.log(persona3.toString());
console.log(`-------persona4-------`);
console.log(persona4.toString());
console.log(`-------persona5-------`);
console.log(persona5.toString());

console.log(`----------------------------------------------`);

//-- Exportar ejemplos de personas
export {persona1,persona2,persona3,persona4,persona5}