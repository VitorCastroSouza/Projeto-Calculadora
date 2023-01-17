let botao = window.document.getElementById('tela')
let pv = 0
let sv
let operacao
let resultado

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
} else{
    sv = botao.value
    n1int = parseInt(pv)
    n2int = parseInt(sv)
    resultado = n1int + n2int
    pv = resultado
    botao.value = ""
    
}
}

function resul(){
    botao.value = resultado
}
