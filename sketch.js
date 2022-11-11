//Variaveis bola
let xBola = 300;
let yBola = 200;
let diametro = 15;
let raio = diametro / 2;

//Velocidade Bola
let velocidadexBola = 6;
let velocidadeyBola = 6;

//variavel raquete
let xRaquete = 5;
let yRaquete = 150;
let Raquetecomprimento = 10;
let Raquetealtura = 90;

//Variavel raqueteoponente
let xRaqueteoponente = 585;
let yRaqueteoponente = 150;
let velocidadeyoponente ;

// variavel colidiu
let colidiu = false

//placar do jogo 
let meuspontos = 0;
let pontooponente = 0;

//sons jogo
let raquetada;
let ponto;
let trilha

function preload(){
 trilha = loadSound("trilha.mp3");
 ponto = loadSound("ponto.mp3");
 raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBola();
  movimentaBola();
  colisaoBola();
  mostraRaquete(xRaquete ,yRaquete);
  movimentaRaquete();
  //colisaoRaquete();
  verificacolisaoRaquete(xRaquete ,yRaquete);
  mostraRaquete(xRaqueteoponente ,yRaqueteoponente);
  movimentaoponente();
  verificacolisaoRaquete(xRaqueteoponente ,yRaqueteoponente);
  placar();
  marcaponto();


}


function mostraBola(){
  circle(xBola, yBola, diametro)
}

function movimentaBola(){
  xBola += velocidadexBola;
  yBola += velocidadeyBola;
}

function colisaoBola(){
   if (xBola  + raio> width || xBola - raio< 0) {
    velocidadexBola *= -1;
  }
  if(yBola +raio > height || yBola - raio < 0){
    velocidadeyBola *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x, y, Raquetecomprimento, Raquetealtura )
}


function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
}
   if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
}
}

function colisaoRaquete(){
  if (xBola - raio < xRaquete + Raquetecomprimento && yBola - raio < yRaquete + Raquetealtura && yBola + raio > yRaquete){
velocidadexBola *= -1;
  }
}

function verificacolisaoRaquete(x, y){
  colidiu =
collideRectCircle (x, y, Raquetecomprimento, Raquetealtura, xBola, yBola, raio);
  if (colidiu){
    velocidadexBola *= -1;
    raquetada.play();
}
}

function movimentaoponente(){
  velocidadeyoponente = yBola - yRaqueteoponente - Raquetecomprimento /2 -30;
  yRaqueteoponente += velocidadeyoponente;
}

function placar(){
  stroke(255)
  textSize (16);
  textAlign (CENTER);
  fill(color(131,111,255));
  rect(150, 10, 40, 20);
  rect(450, 10, 40, 20);
  fill(255);
text (meuspontos, 170, 26)
    fill(255);
text (pontooponente, 470, 26)}

function marcaponto(){
if (xBola > 590){
  meuspontos += 1;
  ponto.play();
}
  if (xBola < 10){
pontooponente += 1;
     ponto.play();
  }
}
