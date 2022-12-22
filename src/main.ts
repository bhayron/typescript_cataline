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
const d2:any    = new Date('2023-01-03T00:00:00.000Z');
const diffInMs   = d2 - d1
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
const difInDays2 = Math.round(diffInDays)
//console.log(difInDays2);

if (diffInDays>14) {
    //console.log("Maior que 14");    
}

const newDate3 = new Date('2023-01-03T00:00:00.000Z');

const newDate4 = (newDate3.getTime() < new Date().getTime())

//console.log(newDate4);

var numbers = ['a', 'b', 'f'];
var doubles = numbers.map(function(value,index) {
   
});
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
       
}

  //console.log(doubles) // 38

  const hoje = new Date()

  // console.log(hoje);
  // console.log(hoje.getDate());
  // console.log(hoje.getDay() );
  // console.log(hoje.getFullYear());
  // console.log(hoje.getHours() );
  // console.log(hoje.getMilliseconds());
  // console.log(hoje.getMilliseconds() );
  // console.log(hoje.getMinutes());
  // console.log(hoje.getMonth());
  // console.log(hoje.getTime());
  // console.log(hoje.toLocaleDateString() );
  


const dataTime = new Date('2022-11-11T13:52:37.000Z')
const data = new Date('2022-11-11T13:52:37.000Z').toLocaleDateString('pt-BR', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour:'2-digit',
  minute:'2-digit',
  second:'2-digit'
});
console.log(data);

//const dataFormatada = moment(dataTime).format('DD/MM/YYYY')


let data_americana = "03-01-2023";
let data_brasileira = data_americana.split('-').reverse().join('-');

let today = new Date(data_brasileira)

//console.log(today)



// console.log(newDate2);
const query ={action: "activate"}
//console.log(query.action);

const selectIdNumberClass = {
    "Divisão 1": 1,
    "Divisão 2": 2,
    "Divisão 3": 3,
  }

  const objetoDivisao = {
    username: 'Produto 4',
    divisaoSelecionado: selectIdNumberClass['Divisão 2'],
  }

 // console.log(objetoDivisao);


 let idnumberclass = 'null';
 let item = 'SPOT 1'

 switch (item) {
     case "Divisão 1":
       idnumberclass = '1';
       break;
     case "Divisão 2":
       idnumberclass = '2';
       break;
     case "Divisão 3":
       idnumberclass = '3';
       break;
     case "Divisão 4":
       idnumberclass = '3';
       break;
 
     case "SPOT 1":
       idnumberclass ='4';
       break;
     case "SPOT 2":
       idnumberclass = '3';
       break;
     case "SPOT 3":
       idnumberclass = '3';
       break;
 
     default:
       idnumberclass = '5';
       break;
   }
   //console.log(idnumberclass);
   
   const cpf = "048.138.161-93";
   const cep = '77848-000'

   //retira os caracteres indesejados...
  const cpfSem = cpf.replace(/[^\d]/g, '');

//  console.log(cpfSem);


let actualCampaign = 'null';
 let status = '1'

 switch (status) {
     case "1":
       actualCampaign = '1';
       break;
     case "2":
       actualCampaign = '2';
       break;
     case "3":
       actualCampaign = '3';
       break;
     case "4":
       actualCampaign = '3';
       break;
    
   }
   console.log(actualCampaign);
   