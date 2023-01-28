let botao = window.document.getElementById('tela')
let pv = 0
let sv
let operacao
let resultado

function conferir(){
    if(operacao==1){
        sv = 0
        n1int = parseInt(pv)
        restxt = botao.value
        resint = parseInt(restxt)
        resultado = n1int + resint
        pv = resultado
    }

    if(operacao==2){
        sv = 0
        n1int = parseInt(pv)
        restxt = botao.value
        resint = parseInt(restxt)
        resultado = n1int - resint
        pv = resultado
    }

    if(operacao==3){
        sv = 0
        n1int = parseInt(pv)
        restxt = botao.value
        resint = parseInt(restxt)
        resultado = n1int * resint
        pv = resultado
    }

    if(operacao==4){
        sv = 0
        n1int = parseInt(pv)
        restxt = botao.value
        resint = parseInt(restxt)
        resultado = n1int / resint
        pv = resultado
    }
}

function mostrar(digito){
    botao.value += digito
}

function limpar(){
    botao.value = ""
    resultado = 0
    pv = 0
    sv = 0
}

function soma(){


    if(pv==0){
        pv = botao.value
        botao.value = ""
        operacao = 1
} else{
    conferir()
    botao.value = ""
    operacao = 1
    }
}

function subtracao(){
    if(pv==0){
        pv = botao.value
        botao.value = ""
        operacao = 2
} else{
    conferir()
    botao.value = ""
    operacao = 2
    }
}

function multiplicacao(){
    if(pv==0){
        pv = botao.value
        botao.value = ""
        operacao = 3
} else{
    conferir()
    botao.value = ""
    operacao = 3
    }
}

function divisao(){
    if(pv==0){
        pv = botao.value
        botao.value = ""
        operacao = 4
    
     } else{ conferir()
    botao.value = ""
    operacao = 4
    }
}


function resul(){
    conferir()
    botao.value = resultado
    operacao = 0
}
