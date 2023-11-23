
class User {

    nombre:string ="";
    edad:number =0;
    friends: Array<string>=["pedro","juna"]
    url:string = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo';
    // resu = fetch(this.url);

    constructor (nombre:string, edad:number){
        
        this.nombre =nombre;
        
        console.log(`soy ${nombre} y tengo ${edad}`);

        
      
    }

     llamar =async(desicion:boolean,nuevoAmigo:string)=> {

        if(desicion){

            this.friends.push(nuevoAmigo);
         console.log(this.friends);
        }else{
            console.log(this.friends);
        }

        const resu:any =await fetch(this.url);
        const datos:any = await resu.json();
        console.log(datos);

        
    }
}

const use =new User("pedro",19);
use.llamar(true,"keo");
console.log(use);