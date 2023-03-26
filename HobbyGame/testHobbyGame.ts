//-- Importar variables de prueba
//-- Developers
import { persona1 } from "./testPerson";
//-- Platforms
import { platform1 } from "./testPlatform";
//-- Videogames
import { videogame1,videogame2,videogame3 } from "./testVideogame";

//-- Importar clases
import { HobbyGame } from "./hobbyGame";

//-- Pruebas

//-- Inicializar clase HobbyGame
let hobbyGame:HobbyGame = new HobbyGame([videogame1,videogame2]);

//-- get and set
console.log(`--------------------HobbyGame------------------------`);
console.log(hobbyGame.getVideogames());
console.log(`----------HobbyGame-Actualizando-datos...------------`);
hobbyGame.setVideogames([videogame1,videogame2,videogame3]);
console.log(hobbyGame.getVideogames());
console.log(`----------HobbyGame-Datos-actualizados-OK------------`);

//-- Métodos
console.log(`--------------checkTotalPriceInPlatform--------------`);
videogame1.setPrice(10);
console.log(`Precio Total de los juegos de ${platform1.getName()}: ${hobbyGame.checkTotalPriceInPlatform(platform1)}`);

console.log(`-------------------checkTotalPrice-------------------`);
videogame3.setPrice(1);
console.log(`Precio Total de los juegos en HobbyGame: ${hobbyGame.checkTotalPrice()}`);

console.log(`-------------------checkLanguage---------------------`);
let language1:string = "Japanese";
console.log(`Juegos en ${language1}: ${hobbyGame.checkLanguage(language1)}`);

console.log(`-------------------checkDeveloper--------------------`);
console.log(`Juegos desarrollador por ${persona1.getName()}: ${hobbyGame.checkDeveloper(persona1)}`);

console.log(`--------------checkPlatformInLanguages---------------`);
let language2:string = "Spanish";
console.log(`Juegos disponibles en ${platform1.getName()} en ${language2}: ${hobbyGame.checkPlatformInLanguages(platform1,language2)}`);

console.log(`---------------------checkScore----------------------`);
console.log(`Juegos con una puntuación mayor que 5: ${hobbyGame.checkScore()}`);
