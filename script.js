let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza
let box = 32; //32 px
let snake = []; //array
snake[0] = { // posicao 0
    x: 8 * box, 
    y: 8 * box
}

function criarBG() { //vai desenhar o background
    context.fillStyle = "lightgreen"; //cor canvas
    context.fillRect(0, 0, 16 * box, 16 * box);
    //posicao x, y, altura e largura
}

function criarCobrinha(){
    for (i = 0; i < snake.length; i++){
        context.fillStyle = "green"; //cor cobrinha
        context.fillRect(snake[i].x, snake[i].y, box, box); //tamanho cobrinha
    }
}   

criarBG();
criarCobrinha();