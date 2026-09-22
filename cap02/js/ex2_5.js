// cria referência ao form e ao elemento h3 onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {

    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    const periodos = Math.ceil(tempo / 15)

    const total = periodos * valor

    resp.innerText = `Valor a pagar R$: ${total.toFixed(2)}`

    e.preventDefault()
})