const cliente = {
    nome :"kaio",
    idade: "16",
    email: "kaio.laureano@escola.pr.gov.br",
    telefone: ["4255555444", "42999885544"],
};

cliente.endereco = [
{
        rua: "R.Dr. Orlando Araujo Costa",
        numero: 1931,
        apartamento: true,
        complemento: "ap 934",  
},
];

for (let chave in cliente){
    let  tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
        console.log('A chave ${chave} tem o valor ${cliente[chave]}') ;
    }

}