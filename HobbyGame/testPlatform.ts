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

console.log(`----------------------------------------------`);


console.log(`-------------------TO-STRING------------------`);

console.log(`-------platform1-------`);
console.log(platform1.toString());
console.log(`-------platform2-------`);
console.log(platform2.toString());

console.log(`----------------------------------------------`);