// Evento que simula o efeito de digitação no inicio da página.
window.addEventListener ('load', function() {
    const texto = document.querySelector('.chamada-texto')
    const digita = "Ingressando no mundo da Tecnologia e realizando um sonho!"
    let indice = 0

    const intervalo = this.setInterval(function() {
        texto.textContent += digita[indice]
        indice++
        if (indice >= digita.length) {
            clearInterval(intervalo)
        }
    }, 30)

})