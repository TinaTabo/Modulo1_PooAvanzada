//-- Importar clases
import { Person } from "./person";
import { Platform } from "./platform";

//-- Definición de tipos de datos
export type Score = 1|2|3|4|5|6|7|8|9|10;

//-- Definicion de clases
export class VideoGame{
    //-- Atributos
    private title: string;
    private releaseYear: number;
    private developers: Person[];
    private nationality: string;
    private director: Person;
    private languages: string[];
    private platforms: Platform[];
    private price: number;
    private score: Score;

    //-- Constructor
    constructor(title:string, releaseYear:number, developers: Person[], nationality:string, director:Person,
                languages:string[], platforms:Platform[], price:number, score:Score){
        this.title = title;
        this.releaseYear = releaseYear;
        this.developers = developers;
        this.nationality = nationality;
        this.director = director;
        this.languages = languages;
        this.platforms = platforms;
        this.price = price;
        this.score = score;
    }

    //-- getters y setters
    getTitle():string{
        return this.title;
    }
    setTitle(title:string){
        this.title = title;
    }

    getReleaseYear():number{
        return this.releaseYear;
    }
    setReleaseYear(releaseYear:number){
        this.releaseYear = releaseYear;
    }

    getDevelopers():Person[]{
        return this.developers;
    }
    setDevelopers(developers:Person[]){
        this.developers = developers;
    }

    getNationality():string{
        return this.nationality;
    }
    setNationality(nationality:string){
        this.nationality = nationality;
    }

    getDirector():Person{
        return this.director;
    }
    setDirector(director:Person){
        this.director = director;
    }

    getLanguages():string[]{
        return this.languages;
    }
    setLanguages(languages:string[]){
        this.languages = languages;
    }

    getPlatforms():Platform[]{
        return this.platforms;
    }
    setPlatforms(platform:Platform[]){
        this.platforms = platform;
    }

    getPrice():number{
        return this.price;
    }
    setPrice(price:number){
        this.price = price;
    }

    getScore():Score{
        return this.score;
    }
    setScore(score:Score){
        this.score = score;
    }

    //-- Métodos
    availableInPlatform(platform:Platform):boolean{
        let available:boolean = false;
        for (let i:number = 0; i < this.platforms.length; i++) {
            if (platform.equalPlatform(this.platforms[i])) {
                available = true;
            }
        }
        return available;
    }

    checkDeveloper(developer:Person):boolean{
        let developed:boolean = false;
        for (let i:number = 0; i < this.developers.length; i++) {
            if (developer.equalPersons(this.developers[i])) {
                developed = true;
            }
        }
        return developed;
    }

    checkLanguage(language:string):boolean{
        let available:boolean = false;
        for (let i:number = 0; i < this.languages.length; i++) {
            if (language == this.languages[i]) {
                available = true;
            }
        }
        return available;
    }

    printAttributes():void{
        for (const attr in this) {
            if (attr == "title"||attr == "releaseYear"||attr == "developers"||attr == "nationality"||
                attr == "director"||attr == "languages"||attr == "platforms"||attr == "price"||attr == "score") {
                    console.log(`${attr} = ${eval("this."+ attr)}`);
            }
        }
    }

    toString():string{
        let chain:string = "";
        for (const attr in this) {
            if (attr == "title"||attr == "releaseYear"||attr == "developers"||attr == "nationality"||
            attr == "director"||attr == "languages"||attr == "platforms"||attr == "price"||attr == "score") {
                    chain += `${attr}: ${eval("this." + attr)}\n`;
            }
        }
        return chain;
    }
}