                var sky;
                var rocket;
                var rightEdge;
                var coin;
                var coinGroup;
                var bomb;
                var bombGroup;
                var score = 0;
                var boom;
                var crash;
                var gameState = 1;
                var PLAY = 1;
                var END = 0;
                var coinSound;
                var start;



                function preload(){
                    skyImg = loadImage("space3.png");
                    rocketImg = loadImage("rocket.png");
                    coinImg = loadImage("coin.png");
                    bombImg = loadImage("bomb.png");
                    boom = loadSound("crash2.mp3");
                    crashImg = loadImage("crash.png");
                    coinSound = loadSound("coin.mp3");
                    startImg = loadImage("start3.png");


                }

                function setup() {
                    createCanvas(600,670);

                    

        
                    sky = createSprite(300,200);
                    sky.addImage(skyImg);
                    sky.velocityY = 2;

                    
                    coinGroup = new Group();
                    bombGroup = new Group();
                    

                    rocket = createSprite(200,400);
                    rocket.addImage(rocketImg);
                    rocket.scale = 0.2;

                    crash = createSprite(300,400);
                    crash.addImage(crashImg);
                    crash.scale = 0.10;
                    crash.visible = false;

                    rocket.setCollider("rectangle",0,0,40,40);
                    
                }

                function draw() {
                    background(0)
                    if(gameState === PLAY){
                    
                        

                    
                    function Bomb(){
                        
                        
                            if(World.frameCount%60===0){
                             bomb=createSprite(400,200,20,20);
                            bomb.addImage(bombImg);
                              bomb.x=Math.round(random(100,550));
                              bomb.velocityY= 4
                              bomb.setLifetime=50;
                              bomb.scale = 0.1;
                              
                              bombGroup.add(bomb);
                            }
                          
                          
                    }
                }
                    
                    drawSprites();
                    if(rocket.isTouching(bombGroup)){
                        crash.visible = true;
                        sky.velocityY = 0;
                        rocket.destroy();
                        boom.play();
                        coinGroup.destroyEach();
                        bombGroup.destroyEach();
                        coinGroup.setVelocityXEach(0);
                        bombGroup.setVelocityXEach(0);
                        } 
                
                    rightEdge = createEdgeSprites();
                    rocket.collide(rightEdge);
                    textSize(30);
                    fill("yellow");
                    text("SCORE: "+ score,30,50);
                    
                    if(coinGroup.isTouching(rocket)){
                        coinGroup.destroyEach();
                        score = score+4;
                        coinSound.play();
                    }

                    var select_coin = Math.round(random(1,2));
                    var select_bomb = Math.round(random(1,2)); 

                    if (World.frameCount % 100 == 0) {
                        if (select_coin == 1) {
                        Coin();
                        } else if (select_bomb == 2) {
                        Bomb
                        } else if (select_coin == 3) {
                        Coin();
                        } else {
                        Bomb();
                        }
                    }

        function Coin(){
                        coin=createSprite(300,100,20,20);
                coin.addImage(coinImg);
                coin.x=Math.round(random(100,550));
                coin.velocityY=5;
                coin.setLifetime=50;    
                coin.scale = 0.02;
                coinGroup.add(coin); 

                
                    }

                    if(keyDown("right")&&rocket.y >= 100){
                        rocket.x = rocket.x +20
                    }

                   

                    if(keyDown("left")||touches.length>0){
                        rocket.x = rocket.x -20

                    }  
                    if(keyDown("space")&& rocket.y >= 90){
                        rocket.y = rocket.y -18;
                    }
                
                    if(sky.y > 400){
                        sky.y = 300
                    }
                
                }
                