let n1txt = document.getElementById('n1')
let n1int = parseInt(n1txt.value)
let n2txt = document.getElementById('n2')
let n2int = parseInt(n2txt.value)
let restrue = document.getElementById('res')
let mat

function soma(){
    mat.inne = n1int.value + n2int.value
    restrue.innerHTML = mat
}