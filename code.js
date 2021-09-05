var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ef64a668-dddb-49c3-a336-59d8dc9fbc05","264c3f00-8ff3-4b28-8045-6d5ed949b64d","22857bea-481e-41b7-b50a-87154c3e6c6e","00e61722-be97-42b7-af71-67fa595d741c"],"propsByKey":{"ef64a668-dddb-49c3-a336-59d8dc9fbc05":{"name":"coin_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png"},"264c3f00-8ff3-4b28-8045-6d5ed949b64d":{"name":"box_1","sourceUrl":"assets/api/v1/animation-library/gamelab/iXz63Eo1uaIi5XtkefDszxi6qzTTCqQm/category_faces/box.png","frameSize":{"x":66,"y":118},"frameCount":3,"looping":true,"frameDelay":2,"version":"iXz63Eo1uaIi5XtkefDszxi6qzTTCqQm","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":198,"y":118},"rootRelativePath":"assets/api/v1/animation-library/gamelab/iXz63Eo1uaIi5XtkefDszxi6qzTTCqQm/category_faces/box.png"},"22857bea-481e-41b7-b50a-87154c3e6c6e":{"name":"box2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/y5x21LxrMhtyUYun4bwNOI7ql3y1cylX/category_faces/box2.png","frameSize":{"x":200,"y":73},"frameCount":3,"looping":true,"frameDelay":2,"version":"y5x21LxrMhtyUYun4bwNOI7ql3y1cylX","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":219},"rootRelativePath":"assets/api/v1/animation-library/gamelab/y5x21LxrMhtyUYun4bwNOI7ql3y1cylX/category_faces/box2.png"},"00e61722-be97-42b7-af71-67fa595d741c":{"name":"bowlingball_1","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"LjVmJWYR6Kxj9TA9mLYyosmCHYXKlO_V","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/00e61722-be97-42b7-af71-67fa595d741c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//declare all the variables
var ball;
var box1, box2, box3, box4, box5;
var coin1, coin2, coin3, coin4, coin5;

//create all the sprites, set animation and scale.
//Change position and scale as per your likings.
 
  box1=createSprite(75, 150); //standing box 1
  box1.setAnimation("box_1");
  box1.scale = 0.75;
  
  box2=createSprite(200, 150); //standing box 2
  box2.setAnimation("box_1");
  box2.scale = 0.75;
  
  box3=createSprite(325, 150); //standing box 3
  box3.setAnimation("box_1");
  box3.scale = 0.75;
  
  box4=createSprite(125, 275); //sleeping box 4
  box4.setAnimation("box2_1");
  box4.scale = 0.6;
  
  box5=createSprite(275, 275); // sleeping box 5
  box5.setAnimation("box2_1");
  box5.scale = 0.6;
  
  ball = createSprite(200,50);
  ball.setAnimation("bowlingball_1");
  ball.scale = 0.1;
  
  coin1 = createSprite(125,225);  //middle coin 1
  coin1.setAnimation("coin_gold_1");
  coin1.scale = 0.5;
  
  coin2 = createSprite(275,225);  //middle coin 2
  coin2.setAnimation("coin_gold_1");
  coin2.scale = 0.5;
  
  coin3 = createSprite(200,350);  //bottom coin 1
  coin3.setAnimation("coin_gold_1");
  coin3.scale = 0.5;
  
  coin4 = createSprite(25,75);   //top coin 1
  coin4.setAnimation("coin_gold_1");
  coin4.scale = 0.5;
  
  coin5 = createSprite(375,75);  //top coin 2
  coin5.setAnimation("coin_gold_1");
  coin5.scale = 0.5;


  //command to create edge sprites.
createEdgeSprites();


function draw() {
  //set white color as background
  background("white");
  
  //commands to bounce off ball from box1, box 2 and box3
  ball.bounce(box1);
   ball.bounce(box2);
   ball.bounce(box3);
   ball.bounce(box4);
    ball.bounce(box5);
     ball.bounce(coin1);
   ball.bounce(coin2);
   ball.bounce(coin3);
   ball.bounce(coin4);
    ball.bounce(coin5);
    
  
  //commands to bounce box4 and box 5
  box1.bounce(box2);
  box1.bounce(box3);
  box1.bounce(box4);
  box1.bounce(box5);
  box1.bounce(box1);
  box2.bounce(box1);
  box2.bounce(box3);
  box2.bounce(box4);
  box2.bounce(box5);
  box2.bounce(box2);
  box3.bounce(box1);
  box3.bounce(box2);
  box3.bounce(box4);
  box3.bounce(box5);
  box3.bounce(box3);
  box4.bounce(box1);
  box4.bounce(box2);
  box4.bounce(box3);
  box4.bounce(box5);
  box4.bounce(box4);
  box5.bounce(box1);
  box5.bounce(box2);
  box5.bounce(box3);
  box5.bounce(box5);
  box5.bounce(box4);
  
  
  
  //commands to displace coin1, coin2, coin3, coin4 and coin5
  coin1.bounce(coin2);
  coin1.bounce(coin3);
  coin1.bounce(coin4);
  coin1.bounce(coin5);
  coin1.bounce(coin1);
  coin2.bounce(coin1);
 coin2.bounce(coin2);
  coin2.bounce(coin3);
coin2.bounce(coin4);
 coin2.bounce(coin5);
 coin3.bounce(coin1);
  coin3.bounce(coin2);
coin3.bounce(coin3);
coin3.bounce(coin4);
coin3.bounce(coin5);
 coin4.bounce(coin1);
coin4.bounce(coin2);
coin4.bounce(coin3);
coin4.bounce(coin4);
coin4.bounce(coin5);
coin5.bounce(coin1);
coin5.bounce(coin2);
coin5.bounce(coin3);
coin5.bounce(coin4);
  coin5.bounce(coin5);
  
  
  
  
  
  //command to bounce off ball from the edges.
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
   box1.bounceOff(topEdge);
    box1.bounceOff(bottomEdge);
     box1.bounceOff(leftEdge);
      box1.bounceOff(rightEdge);
  box2.bounceOff(bottomEdge);
   box2.bounceOff(topEdge);
    box2.bounceOff(rightEdge);
     box2.bounceOff(leftEdge);
  box3.bounceOff(rightEdge);
    box3.bounceOff(leftEdge);
      box3.bounceOff(topEdge);
        box3.bounceOff(bottomEdge);
  box4.bounceOff(leftEdge);
    box4.bounceOff(bottomEdge);
      box4.bounceOff(rightEdge);
        box4.bounceOff(topEdge);
          box5.bounceOff(leftEdge);
    box5.bounceOff(bottomEdge);
      box5.bounceOff(rightEdge);
        box5.bounceOff(topEdge);
        //coin bounce from edge
     ;coin1.bounceOff(topEdge);
      ;coin1.bounceOff(bottomEdge);
       ;coin1.bounceOff(leftEdge);
        ;coin1.bounceOff(rightEdge);
  coin2.bounceOff(bottomEdge);
   coin2.bounceOff(topEdge);
    coin2.bounceOff(rightEdge);
     coin2.bounceOff(leftEdge);
  coin3.bounceOff(rightEdge);
    coin3.bounceOff(leftEdge);
      coin3.bounceOff(topEdge);
        coin3.bounceOff(bottomEdge);
  coin4.bounceOff(leftEdge);
    coin4.bounceOff(bottomEdge);
      coin4.bounceOff(rightEdge);
        coin4.bounceOff(topEdge);
          coin5.bounceOff(leftEdge);
  coin5.bounceOff(bottomEdge);
    
      coin5.bounceOff(rightEdge);
        coin5.bounceOff(topEdge);
  
  //command to draw all the sprites
  drawSprites();
}


function mousePressed()
{
  //command to set velocityX of ball
ball.velocityX=5;
//command to set velocityy of ball
ball.velocityY=-5;




  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
