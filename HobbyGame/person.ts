//-- Enum con los valores que puede tomar el atributo porfession.
export enum Profesion{
    developer = 'developer',
    tester = 'tester',
    manager = 'manager',
    director = 'director'
}

//-- Definicion de clases
export class Person{
    //-- Atributos
    private name: string;
    private nationality: string;
    private profession: Profesion;
    experienceYears: number;

    //-- Constructor
    constructor(name:string, nationality:string, profession:Profesion, experienceYears:number){
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.experienceYears = experienceYears;
    }

    //-- getters y setters
    getName():string{
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }

    getNationality():string{
        return this.nationality;
    }
    setNationality(nationality:string){
        this.nationality = nationality;
    }

    getProfession():Profesion{
        return this.profession;
    }
    setProfession(profession:Profesion){
        this.profession = profession;
    }

    getExperienceYears():number{
        return this.experienceYears;
    }
    setExperienceYears(experienceYears:number){
        this.experienceYears = experienceYears;
    }

    //-- Métodos
    equalPersons(person:Person):boolean{
        let equalPerson:boolean = false;
        if (this.name == person.name && this.nationality == person.nationality &&
            this.profession == person.profession && this.experienceYears == person.experienceYears) {
            equalPerson = true;
        }
        return equalPerson;
    }

    printAttributes():void{
        console.log(`Name = ${this.getName()}`);
        console.log(`Nationality = ${this.getNationality()}`);
        console.log(`Profession = ${this.getProfession()}`);
        console.log(`Experience Years = ${this.getExperienceYears()}`);
    }

    toString():string{
        return `Name: ${this.getName()},\nNationality: ${this.getNationality()},\nProfession: ${this.getProfession()},\nExperience Years: ${this.getExperienceYears()}`
    }
}