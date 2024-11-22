var setaDireita = window.document.getElementById("setadireita")
var setaEsquerda = window.document.getElementById("setaesquerda")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")

function RolarParaDireita() {
    bruna.style ="display:none"
    samantha.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex; margin-top: 55px"
}

function RolarParaEsquerda() {
    bruna.style ="display:flex"
    samantha.style ="display:none"
    setaDireita.style ="display:flex; margin-top: 55px"
    setaEsquerda.style ="display:none"
}