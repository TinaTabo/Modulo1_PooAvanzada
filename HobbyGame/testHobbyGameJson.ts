//-- Importar clases
import { HobbyGame } from "./hobbyGame";

//-- Importar variables de prueba
import { videogame1,videogame2,videogame3 } from "./testVideogame";


//-- Pruebas
//-- Inicializar clase HobbyGame
let hobbyGame:HobbyGame = new HobbyGame([videogame1,videogame2,videogame3]);

console.log(`----------------------toJSON-------------------------`);
hobbyGame.toJSON();

console.log(`---------------------getInstance---------------------`);
let hobbyGame2 = hobbyGame.getInstance("hobbyGameBBDD_2");
console.log(hobbyGame2);
