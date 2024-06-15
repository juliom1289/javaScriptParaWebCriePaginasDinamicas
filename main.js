// [alert("Olá mundo")] -> checar se página js sta lincado ao html

//console -> document.querySelector('.tecla_pom') -> Js compreende elemento com essa sintaxe

//func que reproduz audio 
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        //tocaSom('button') -> console
        console.log("Elemento não encontrado ou seletor inválido")
    }
}

//ao clicar no button "tecla_pom", func tocaSomPom é acionada
//forma rustica -> document.querySelector('.tecla_pom').onclick = tocaSomPom;

//tecla -> elemento = a todos os buttons que recebem um som
const listaDeTeclas = document.querySelectorAll('.tecla');
/*o projeto se propõe executar diversos sons diferentes ao tocar-se botões diferentes. 
Ou seja, uma mesma funcionalidade em diferentes contextos, o que justifica acessarem-se
todos os botões de uma vez, por meio de uma lista, utilizando o document.querySelectorAll*/

//let == variavel

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    //js não acessa teclas html diretamente
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio)
    //funções anônimas só podem ser usadas quando são armazenadas em atributos constantes ou variaveis  
    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function (evento) {
    // [===]-> compara se dado e tipo são iguais
    // evento -> pressionar de tecla
    // 'Spacee' / 'Enter' == key (console) -> console.log(evento)

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}