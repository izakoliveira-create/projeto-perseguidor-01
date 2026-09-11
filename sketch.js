//Variaveis Globais
let cor;
let posicaoVariavel;
let posicaoHorizontal;

function setup() {
  createCanvas(400, 400);
  cor = color(255, 0, 0)
  posicaoVariavel = 200;
  posicaoHorizontal = 200;
}

function draw() {
  background(220);
  fill(cor);
  circle(posicaoVariavel, posicaoHorizontal, 25);  

  //--------Eixo y-------
  if(mouseY < posicaoHorizontal){
    posicaoHorizontal--;
  }
  if(mouseY > posicaoHorizontal){
    posicaoHorizontal++;
  }
  if(mouseX < posicaoVariavel){
    posicaoVariavel--;
  }
  if(mouseX > posicaoVariavel){
    posicaoVariavel++;
  }
}