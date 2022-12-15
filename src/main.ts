import moment from 'moment'
interface User {
    name:string, 
    city:string,
    address:{
        city?:string
        UF:string
    }
}



function showCity(user: User){
    return user.address.city?.toUpperCase()
}

const response = showCity({
    name:'bhayron',
    city:'santa fe',
    address: {
        city: 'santa fe',
        UF:'PE',
    },
})

interface Veiculo{
    rodas: number,
    acelerar: () => void
    frear?: () => void
}

interface Moto extends Veiculo{
    capacete: boolean,
    empinar: () => void
}

let bros: Moto

class CriarVeiculo implements Veiculo{
    rodas: number
    constructor(rodas: number){
        this.rodas = rodas
    }
    acelerar(){
        console.log("Qualquer coisa");
        
    }
}

const d1:any  = new Date()
const d2:any    = new Date('2022-11-22T00:00:00.000Z');
const diffInMs   = d1 - d2
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

if (diffInDays>14) {
    console.log("Maior que 14");    
}



var numbers = ['a', 'b', 'f'];
var doubles = numbers.map(function(value,index) {
   
});
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
       
}
  //console.log(doubles) // 38