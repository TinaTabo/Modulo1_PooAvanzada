//-- Importar clases
import { Platform,StorageDevice } from "./platform";

//-- Pruebas
let platform1:Platform = new Platform("Netflix",1997,"Netflix,Inc.",45625874421,1,true,1080,true,StorageDevice.cartridge,"red");
let platform2:Platform = new Platform("Disney+",1997,"The Walt Disney Company",456851879815498,2,true,1080,true,StorageDevice.card,"blue");
let platform3:Platform = new Platform("Netflix",1997,"Netflix,Inc.",45625874421,1,true,1080,true,StorageDevice.cartridge,"red");

console.log(`----------------EQUAL-PLATFORMS-----------------`);

console.log(`¿ platform1 es igual a platform2 ?: ${platform1.equalPlatform(platform2)}`);
console.log(`¿ platform1 es igual a platform3 ?: ${platform1.equalPlatform(platform3)}`);

console.log(`----------------------------------------------`);


console.log(`--------------PRINT-ATTRIBUTES----------------`);

console.log(`-------platform1-------`);
platform1.printAttributes();
console.log(`-------platform2-------`);
platform2.printAttributes();
console.log(`-------platform3-------`);
console.log(`Los datos actuales de platform3 son iguales que los de platform1: `);
console.log(`name = ${platform3.getName()}`);
console.log(`releaseYear = ${platform3.getReleaseYear()}`);
console.log(`company = ${platform3.getCompany()}`);
console.log(`nBits = ${platform3.getNBits()}`);
console.log(`generation = ${platform3.getGeneration()}`);
console.log(`hasHD = ${platform3.getHasHD()}`);
console.log(`hDSize = ${platform3.getHDSize()}`);
console.log(`hasInterntConexion = ${platform3.getHasInterntConexion()}`);
console.log(`storageDevice = ${platform3.getStorageDevice()}`);
console.log(`color = ${platform3.getColor()}`);

console.log(`-------------Cambiando datos...-----------`);
platform3.setName("Prime Video");
platform3.setReleaseYear(2006);
platform3.setCompany("Amazon");
platform3.setNBits(48294518945618);
platform3.setGeneration(3);
platform3.setHasHD(true);
platform3.setHDSize(1080);
platform3.setHasInterntConexion(false);
platform3.setStorageDevice(StorageDevice.bluray);
platform3.setColor("Cyan");
platform3.printAttributes();


console.log(`----------------------------------------------`);


console.log(`-------------------TO-STRING------------------`);

console.log(`-------platform1-------`);
console.log(platform1.toString());
console.log(`-------platform2-------`);
console.log(platform2.toString());
console.log(`-------platform3-------`);
console.log(platform3.toString());
console.log(`----------------------------------------------`);

//-- Exportar ejemplos de plataformas
export {platform1,platform2,platform3};