//-- Enum con los valores que puede tomar el atributo storageDevice.
export enum StorageDevice{
    cartridge = "cartridge",
    card = "card",
    cd = "cd",
    dvd = "dvd",
    bluray = "bluray"
}

//-- Definición de clases
export class Platform{
    //-- Atributos
    private name: string;
    private releaseYear: number;
    private company: string;
    private nBits: number;
    private generation: number;
    private hasHD: boolean;
    private hDSize: number;
    private hasInterntConexion: boolean;
    private storageDevide: StorageDevice;
    private color: string;

    //-- Constructor
    constructor(name:string, releaseYear:number, company:string, nBits:number, generation:number, hasHD:boolean,
                hDSize:number, hasInterntConexion:boolean, storageDevice:StorageDevice, color:string){
        this.name = name;
        this.releaseYear = releaseYear;
        this.company = company;
        this.nBits = nBits;
        this.generation = generation;
        this.hasHD = hasHD;
        this.hDSize = hDSize;
        this.hasInterntConexion = hasInterntConexion;
        this.storageDevide = storageDevice;
        this.color = color;
    }

    //-- getters y setters
    getName():string{
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }

    getReleaseYear():number{
        return this.releaseYear;
    }
    setReleaseYear(releaseYear:number){
        this.releaseYear = releaseYear;
    }

    getCompany():string{
        return this.company;
    }
    setCompany(company:string){
        this.company = company;
    }

    getNBits():number{
        return this.nBits;
    }
    setNBits(nBits:number){
        this.nBits = nBits;
    }

    getGeneration():number{
        return this.generation;
    }
    setGeneration(generation:number){
        this.generation = generation;
    }

    getHasHD():boolean{
        return this.hasHD;
    }
    setHasHD(hasHD:boolean){
        this.hasHD = hasHD;
    }

    getHDSize():number{
        return this.hDSize;
    }
    setHDSize(hDSize:number){
        this.hDSize = hDSize;
    }

    getHasInterntConexion():boolean{
        return this.hasInterntConexion;
    }
    setHasInterntConexion(hasInterntConexion:boolean){
        this.hasInterntConexion = hasInterntConexion;
    }

    getStorageDevice():StorageDevice{
        return this.storageDevide;
    }
    setStorageDevice(storageDevice:StorageDevice){
        this.storageDevide = storageDevice;
    }

    getColor():string{
        return this.color;
    }
    setColor(color:string){
        this.color = color;
    }

    //-- Métodos
    equalPlatform(platform:Platform):boolean{
        let equalPlatform:boolean = false;
        if (this.name == platform.name && this.releaseYear == platform.releaseYear && this.company == platform.company
            && this.nBits == platform.nBits && this.generation == platform.generation && this.hasHD == platform.hasHD
            && this.hDSize == platform.hDSize && this.hasInterntConexion == platform.hasInterntConexion
            && this.storageDevide == platform.storageDevide && this.color == platform.color) {
            equalPlatform = true;
        }
        return equalPlatform;
    }

    printAttributes():void{
        for (const attr in this) {
            if (attr == "name"||attr == "releaseYear"||attr == "company"||attr == "nBits"||attr == "generation"||
                attr == "hasHD"||attr == "hDSize"||attr == "hasInterntConexion"||attr == "storageDevice"||attr == "color") {
                    console.log(`${attr} = ${eval("this."+ attr)}`);
            }
        }
    }

    toString():string{
        let chain:string = "";
        for (const attr in this) {
            if (attr == "name"||attr == "releaseYear"||attr == "company"||attr == "nBits"||attr == "generation"||
                attr == "hasHD"||attr == "hDSize"||attr == "hasInterntConexion"||attr == "storageDevice"||attr == "color") {
                    chain += `${attr}: ${eval("this." + attr)}\n`;
            }
        }
        return chain;
    }
}