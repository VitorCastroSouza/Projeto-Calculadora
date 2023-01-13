
function soma(){
    n1txt = window.document.getElementById('n1')
    n2txt = window.document.getElementById('n2')
    resposta = window.document.getElementById('res')
    n1int = parseInt(n1txt.value)
    n2int = parseInt(n2txt.value)
    richtroll = n1int + n2int
    resposta.innerHTML = richtroll
    
}