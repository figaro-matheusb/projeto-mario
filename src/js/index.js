/* 

OBJETIVO 1 - quando o usuario clicar no botão de veja o trailer, devemos abril a modal com o video do trailer

OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal

OBJETIVO 1 - quando o usuario clicar no botão de veja o trailer, devemos abril a modal com o video do trailer
    - passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js
    - passo 2 - dar um jeito de identificar quando o usuario blicar no botao
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal
    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando js
    - passo 2 - dar um jeito de identificar quando o usuario clicar no X
    - passo 3 - fechar modal

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "")
});


