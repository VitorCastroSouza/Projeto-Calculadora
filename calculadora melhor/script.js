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
        operacao = 1
} else{
    sv = botao.value
    n1int = parseInt(pv)
    n2int = parseInt(sv)
    resultado = n1int + n2int
    pv = resultado
    botao.value = ""
    operacao = 1
    
}
}

function resul(){
    if(operacao==1){
        sv = 0
        n1int = parseInt(pv)
        restxt = botao.value
        resint = parseInt(restxt)
        resultado = n1int + resint
        pv = resultado
    }
    botao.value = resultado
}
