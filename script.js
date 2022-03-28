const btnSortear        = document.querySelector('.btnSortear')
const textArea          = document.querySelector('textarea')
const resultado         = document.querySelector('.resultado p')
const popUpResultado    = document.querySelector('.resultado')
const btnFechar         = document.querySelector('.btnFechar')

function pegarDadosDoFormulario() {
    const valorCampo        = textArea.value;
    const listaDeNomes      = valorCampo.split(",")
    const tamanhoArray      = listaDeNomes.length
    const posicaoNome       = gerarNumeroAleatorio(tamanhoArray)
    const nome              = listaDeNomes[posicaoNome]
    mostrarResultado(nome)

    textArea.value = ""
}

function gerarNumeroAleatorio(tamanhoArray) {
    return Math.floor(Math.random() * (tamanhoArray - 0) + 0)
}

function mostrarResultado(nome) {
    resultado.innerText = `Resultado: ${nome}`
    popUpResultado.classList.add("mostrarResultado")
}

btnSortear.addEventListener('click', pegarDadosDoFormulario)

btnFechar.addEventListener('click', fecharPopUp)

function fecharPopUp() {
    popUpResultado.classList.remove("mostrarResultado")
}