//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogSprite;

function preload() {
  dog = loadImage("dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dogSprite = createSprite(250, 250, 10, 10);
  dogSprite.addImage("dog1", dog);
  dogSprite.scale = 0.25
 
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {


  if (x <= 0) {
    x = 0;
  } else {
    x = x - 1;
  }
  database.ref('/').update({

    Food: x

  })

}

function draw() {
  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)) {
    console.log("before writestock");
    writeStock(foodS);
   
    dogSprite.addImage("dog1",happyDog);
    console.log("Inside IF");
  }

  drawSprites();

}