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
const data:string= '10-12-2001'
const dataFormatada = moment(data).format('YYYY/MM/DD')
console.log(dataFormatada);
