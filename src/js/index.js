const botoesCarrossel = document.querySelectorAll(".botao");
const imgCarrossel = document.querySelectorAll(".img");
let index = 0;
let intervalo = setInterval(carrosselAutomatico, 5000);

function mudarImagem(novoindex) {
    botoesCarrossel.forEach(botao=>botao.classList.remove('selecionado'));
    botoesCarrossel[index].classList.add('selecionado');
    imgCarrossel.forEach(img=>img.classList.remove('ativa'));
    imgCarrossel[index].classList.add("ativa");   
}

botoesCarrossel.forEach((botao, i) => {
    botao.addEventListener('click', () => {
        clearInterval(intervalo);
        index = i;
        mudarImagem(index);
        intervalo = setInterval(carrosselAutomatico, 5000);
    });
});

function carrosselAutomatico() {
    index++;
    if (index >= 6) {
        index = 0;
    }
    mudarImagem(index);
}