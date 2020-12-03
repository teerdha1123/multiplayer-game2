var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var track,ground,car1i,car2i,car3i,car4i
var cars, car1, car2, car3, car4;
function preload(){
track=loadImage('images/track.jpg')
car1i=loadImage('images/car1.png')
car2i=loadImage('images/car2.png')
car3i=loadImage('images/car3.png')
car4i=loadImage('images/car4.png')
ground=loadImage('images/ground.png')
}

function setup(){
  canvas = createCanvas(displayWidth - 4, displayHeight-2);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
