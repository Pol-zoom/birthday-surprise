let balloons = [];
let wishes = ["Счастья", "Здоровья", "Радости", "Успеха", "Веселья", "Смеха", "Улыбок", "Гармонии"];
let messageY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  messageY = height / 2;

  // Создаем шарики
  for(let i=0; i<wishes.length; i++){
    balloons.push({
      x: random(100, width-100),
      y: height + random(50,200),
      color: color(random(50,255), random(50,255), random(50,255)),
      word: wishes[i]
    });
  }
}

function draw() {
  background(135, 206, 235); // светлый небесный фон

  // Надпись сверху
  fill(255, 255, 0);
  textSize(60);
  text("С Днём Рождения, Алёна!", width/2, messageY);
  if(messageY > 100) messageY -= 0.5; // поднимается вверх до 100px

  // Рисуем шарики
  for(let b of balloons){
    fill(b.color);
    noStroke();
    ellipse(b.x, b.y, 50, 50); // шарик

    stroke(255);
    strokeWeight(2);
    line(b.x, b.y+25, b.x, b.y+75); // ниточка

    fill(255);
    noStroke();
    textSize(20);
    text(b.word, b.x, b.y+100); // слово внизу

    b.y -= 1; // шарик поднимается
    if(b.y + 50 < 0){ // если шарик улетел вверх, возвращаем его внизу
      b.y = height + random(50,200);
      b.x = random(100, width-100);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
