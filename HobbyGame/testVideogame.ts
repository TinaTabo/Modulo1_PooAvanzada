//-- Importar clases
import { Person } from "./person";
import { Platform } from "./platform";
import { VideoGame,Score } from "./videogame";

//-- Importar variables de prueba
import { persona1,persona2,persona3,persona4,persona5 } from "./testPerson";
import { platform1,platform2,platform3 } from "./testPlatform";

//-- Pruebas
//-- Definición de Videojuego 1
let developers1:Person[] = [persona1,persona2];
let languages1:string[] = ["English","Spanish","German","korean","Chinese"];
let platforms1:Platform[] = [platform1];
let score1: Score = 10;
let videogame1:VideoGame = new VideoGame("Sims 4",2014,developers1,"American",persona3,languages1,platforms1,0,score1);

//-- Definición de Videojuego 2
let developers2:Person[] = [persona3,persona4,persona5];
let languages2:string[] = ["English","Spanish","German","korean","Chinese","Japanese"];
let platforms2:Platform[] = [platform1,platform2];
let score2: Score = 7;
let videogame2:VideoGame = new VideoGame("BattleField",2002,developers2,"American",persona1,languages2,platforms2,41.95,score1);

//-- Definición de Videojuego 3
let videogame3:VideoGame = new VideoGame("BattleField",2002,developers2,"American",persona1,languages2,platforms2,41.95,score1);

//-- getters y setters
console.log(`--------------PRINT-ATTRIBUTES----------------`);
console.log(`-------videojuego-1-------`);
videogame1.printAttributes();

console.log(`-------videojuego-2-------`);
videogame2.printAttributes();

console.log(`-------videojuego-3-------`);
console.log(`videojuego3 tiene los mismos datos que videojuego 2, son iguales`);
console.log(`-------------Cambiando datos...-----------`);
videogame3.setTitle("League Of Legends");
videogame3.setReleaseYear(2009);
videogame3.setDevelopers([persona2,persona4,persona3]);
videogame3.setNationality("American");
videogame3.setDirector(persona5);
videogame3.setLanguages(["English","Spanish"]);
videogame3.setPlatforms([platform3]);
videogame3.setPrice(0);
videogame3.setScore(9);

console.log(`title = ${videogame3.getTitle()}`);
console.log(`releaseYear = ${videogame3.getReleaseYear()}`);
console.log(`developers = ${videogame3.getDevelopers()}`);
console.log(`nationality = ${videogame3.getNationality()}`);
console.log(`director = ${videogame3.getDirector()}`);
console.log(`languages = ${videogame3.getLanguages()}`);
console.log(`platforms = ${videogame3.getPlatforms()}`);
console.log(`price = ${videogame3.getPrice()}`);
console.log(`score = ${videogame3.getScore()}`);

console.log(`-------------------TO-STRING------------------`);
console.log(`-------videojuego-1-------`);
console.log(videogame1.toString());
console.log(`-------videojuego-2-------`);
console.log(videogame2.toString());
console.log(`-------videojuego-3-------`);
console.log(videogame3.toString());
console.log(`------------------------------------------------`);

//-- Comprobar si un juego ha salido para una x plataforma
console.log(`El juego ${videogame1.getTitle()} esta disponible en ${platform1.getName()}?: ${videogame1.availableInPlatform(platform1)}`);
console.log(`El juego ${videogame1.getTitle()} esta disponible en ${platform2.getName()}?: ${videogame1.availableInPlatform(platform2)}`);

console.log(`------------------------------------------------`);

//-- Comprobar desarrollador
console.log(`El juego ${videogame1.getTitle()} ha sido desarrollado por ${persona1.getName()}?: ${videogame1.checkDeveloper(persona1)}`);
console.log(`El juego ${videogame2.getTitle()} ha sido desarrollado por ${persona3.getName()}?: ${videogame2.checkDeveloper(persona3)}`);
console.log(`El juego ${videogame3.getTitle()} ha sido desarrollado por ${persona5.getName()}?: ${videogame3.checkDeveloper(persona5)}`);
console.log(`------------------------------------------------`);

//-- Comprobar lenguage
let checklanguage:string = "korean";
console.log(`El juego ${videogame1.getTitle()} está disponible en ${checklanguage}?: ${videogame1.checkLanguage(checklanguage)}`);
console.log(`El juego ${videogame2.getTitle()} está disponible en ${checklanguage}?: ${videogame2.checkLanguage(checklanguage)}`);
console.log(`El juego ${videogame3.getTitle()} está disponible en ${checklanguage}?: ${videogame3.checkLanguage(checklanguage)}`);
console.log(`------------------------------------------------`);

//-- Exportar videojuegos
export {videogame1,videogame2,videogame3};