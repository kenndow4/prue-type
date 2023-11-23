"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class User {
    // resu = fetch(this.url);
    constructor(nombre, edad) {
        this.nombre = "";
        this.edad = 0;
        this.friends = ["pedro", "juna"];
        this.url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo';
        this.llamar = (desicion, nuevoAmigo) => __awaiter(this, void 0, void 0, function* () {
            if (desicion) {
                this.friends.push(nuevoAmigo);
                console.log(this.friends);
            }
            else {
                console.log(this.friends);
            }
            const resu = yield fetch(this.url);
            const datos = yield resu.json();
            console.log(datos);
        });
        this.nombre = nombre;
        console.log(`soy ${nombre} y tengo ${edad}`);
    }
}
const use = new User("pedro", 19);
use.llamar(true, "keo");
console.log(use);
