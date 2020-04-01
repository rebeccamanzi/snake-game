let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza
let box = 32; //32 px

function criarBG() { //vai desenhar o background
    context.fillStyle = "lightgreen"; //cor do 2d
    context.fillRect(0, 0, 16 * box, 16 * box);
    //posicao x, y, altura e largura
}

criarBG();