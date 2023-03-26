//-- Importar módulos
import { writeFileSync,readFileSync } from 'fs';

//-- Importar clases
import { VideoGame } from "./videogame";
import { Platform } from "./platform";
import { Person } from "./person";

//-- Definición de clase
export class HobbyGame{
    //-- Atributos
    private videogames:VideoGame[];

    //-- Constructor
    constructor(videogames:VideoGame[]){
        this.videogames = videogames;
    }

    //-- getters y setters
    getVideogames():VideoGame[]{
        return this.videogames;
    }
    setVideogames(videogames:VideoGame[]){
        this.videogames = videogames;
    }

    checkTotalPriceInPlatform(platform:Platform):number{
        let total:number = 0;
        for (let i:number = 0; i < this.videogames.length; i++) {
            for (let j:number = 0; j < this.videogames[i].getPlatforms().length; j++) {
                if (platform == this.videogames[i].getPlatforms()[j]) {
                    total += this.videogames[i].getPrice();
                }
            }
        }
        return total;
    }

    checkTotalPrice():number{
        let total:number = 0;
        for (let i:number = 0; i < this.videogames.length; i++) {
            total += this.videogames[i].getPrice();
        }
        return total;
    }

    checkLanguage(language:string):VideoGame[]{
        let videoGamesInLanguage:VideoGame[] = [];
        for (let i:number = 0; i < this.videogames.length; i++) {
            for (let j:number = 0; j < this.videogames[i].getLanguages().length; j++) {
                if (language == this.videogames[i].getLanguages()[j]) {
                    videoGamesInLanguage.push(this.videogames[i]);
                }
            }
        }
        return videoGamesInLanguage;
    }

    checkDeveloper(developer:Person):VideoGame[]{
        let videogamesByDeveloper:VideoGame[] = [];
        for (let i:number = 0; i < this.videogames.length; i++) {
            for (let j:number = 0; j < this.videogames[i].getDevelopers().length; j++) {
                if (developer == this.videogames[i].getDevelopers()[j]) {
                    videogamesByDeveloper.push(this.videogames[i]);
                }
            }
        }
        return videogamesByDeveloper;
    }

    checkPlatformInLanguages(platform:Platform,language:string):VideoGame[]{
        let videogamesForPlatfromInLanguages:VideoGame[] = [];
        for (let i:number = 0; i < this.videogames.length; i++) {
            for (let j:number = 0; j < this.videogames[i].getPlatforms().length; j++) {
                if (platform == this.videogames[i].getPlatforms()[j]) {
                    for (let k:number = 0; k < this.videogames[i].getLanguages().length; k++) {
                        if (language == this.videogames[i].getLanguages()[k]) {
                            videogamesForPlatfromInLanguages.push(this.videogames[i]);
                        }
                    }
                }
            }
        }
        return videogamesForPlatfromInLanguages;
    }

    checkScore():VideoGame[]{
        let videogamesScore5:VideoGame[] = [];
        for (let i:number = 0; i < this.videogames.length; i++) {
            if (this.videogames[i].getScore() >= 5) {
                videogamesScore5.push(this.videogames[i]);
            }
        }
        return videogamesScore5;
    }

    toJSON():void{
        console.log(`-----------Creando-Fichero-JSON--------------`);
        let hobbyGameJSON:string = JSON.stringify(this.videogames);
        writeFileSync("hobbyGameBBDD.json",hobbyGameJSON);
        console.log(`------Fichero-JSON-Creado-Correctamente------`);
    }

    getInstance(nombreFichero:string):HobbyGame{
        nombreFichero = nombreFichero.concat(".json");
        let hobbyGameData = readFileSync(nombreFichero);
        let hobbyGame = JSON.parse(hobbyGameData.toString());
        console.log(`--------Creando-instancia-de-HobbyGame-------`);
        return hobbyGame;
    }
}