const alunos = ["João" , "Juliana" , "Ana" , "Caio"];

const mediasDeAlunosEMedias = [10 , 8, 7.5 , 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
       console.log(`${aluno} está cadastrado!`);
    } else {
        console.log(`${aluno} não está cadastrado.`);
    }
}

exibeNomeENota("Rafael");