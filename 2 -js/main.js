 //// FETCH HTML ELEMENTS

// Status bar
 const moneyCounter = document.getElementById('gold-counter');
 const baseHealth = document.getElementById('life-value');

 // Map
 const grid = document.getElementById('grid');
 const selectableTile = document.querySelector('.can-build-tower')
 const towerTile = document.querySelector('.tower-rank-one');
 const upgradedTile = document.querySelector('.tower-rank-two');

 // Entities
 const horde = document.getElementById('enemy');
 const castle = document.getElementById('base');

 const towerOne = document.getElementById('tower-one');
 const towerTwo = document.getElementById('tower-two');
 const towerThree = document.getElementById('tower-three');
 
 // Buttons
 const startBtn = document.getElementById('startBtn');
 const retryBtn = document.getElementById('retryBtn');
 const nextBtn = document.getElementById('nextBtn');

//// DECLARATION OF VARIABLES
let player = {
    name: "Rodrigo",
    money : 150,
}

const base = {
    health : 200,
    attack: 0,
};

class Tower {
    constructor() {
        this.attack = 1;
        this.health = 100;
        this.rank = 0;

    }
    display() {

        if (player.money >= 50 && this.rank === 0) {
            
            towerOne.classList.add('tower-rank-one');

            player.money = player.money - 50;
            moneyCounter.innerHTML = player.money;

            this.rank = 1;

        } else if (player.money >= 100 && this.rank === 1) {

            towerOne.classList.remove('tower-rank-one');
            towerOne.classList.add('tower-rank-two');

            player.money = player.money - 100;
            moneyCounter.innerHTML = player.money;

            this.rank = 2;

        } else {
            alert("You are too poor!");
        }
        
    }
    attackEnemy(){
        setInterval(() => {
            minion.health = minion.health - 2; 
            horde.classList.add('hurt'); 
            tile2.classList.add('bullets');
            minion.checkDie(); 
        }, 1000);
           
        return minion.health;
    }
}

class Enemy {
    constructor () {
        this.health = 10;
        this.strength = 200;
    
    }
    domRect(){
        const horde = document.getElementById('enemy');
        let currentPos = horde.getBoundingClientRect();
        return currentPos;
    }
    // createNewEnemy () {
    //     const newEl = document.createElement('div');
    //     newEl.classname = "enemy";
    //     grid.appendChild('newEl');
    //     return newEl;
    // }
    move() {
        horde.classList.add('moving');
        // minions.push(new minions.Instance());
    }
    attackBase(){      
        
        base.health = base.health - this.strength;
        updateHealth();

        horde.classList.remove('moving'); 
        horde.style.visibility = "hidden";
        setTimeout(()=> horde.style.visibility = "visible", 1000);

        return base.health;
    }
    checkDie() {
        if (this.health <= 0) {
            horde.classList.remove('enemy'); 
            horde.classList.remove('hurt');
            this.strength = 0;  
            clearInterval(IntervalId);
            
        }
    }
}

 const towerA = new Tower();
 const towerB = new Tower();
 
 
 const listEnemy = [];
 const minion = new Enemy();

//  const minions = {
//     Instance: Enemy,
//     push: function (minion) {
//       listEnemy.push(minion);
//       return listEnemy;
//     },
//     get: function () {
//       return listEnemy;
//     },
//     reset: function () {
//       listEnemy.splice(0, listEnemy.length);
//     },
//   };

  
 //// CHECK COLLISIONS

 // Attack of the base

 var foe = minion.domRect();
 var b = castle.getBoundingClientRect();

const tileOne = document.querySelector(".tile-one");
 const tileTwo = document.querySelector(".tile-two");
 var tile1 = tileOne.getBoundingClientRect();
 var tile2 = tileTwo.getBoundingClientRect();


 function updatePos() {
        foe = minion.domRect();
        return foe;
 }

 function checkBaseCollision(foe, b) {  
        if (foe.x <= (b.x+b.width)) {
           console.log(minion.attackBase());
            minion.attackBase();
    }
 }

 // Attack of the towers

 function checkEnemyCollision(foe, tile2) {
        if ((foe.x <= (tile2.x+tile2.width) && towerA.rank > 0)) {
            horde.classList.add('hurt');
            towerA.attackEnemy();
        } 
 }

//  function checkEnemyCollisionB(foe, tile1) {
//     if ((foe.x <= (tile1.x+tile1.width) && towerB.rank > 0)) {
//         horde.classList.add('hurt');
//         towerB.attackEnemy();
//     } 
// }


//// SHOP MECHANICS

function gainMoney(){  
    if (minion.health <= 0) {
        player.money = player.money + 20;
        moneyCounter.textContent = player.money;
    }
};

//// WIN LOSE MECHANICS

function updateHealth (){
    const baseHealth = document.getElementById('life-value');
    baseHealth.textContent = base.health;
};

const loseScreen = document.querySelector('.lose');
const winScreen = document.querySelector('.win');

function winGame () {
    if (minion.health === 0 && base.health > 0) {
        grid.classList.add('fadeOut');
        winScreen.classList.add('winFadeIn');
        moneyCounter.innerHTML = 0;
    }
}

function loseGame () {
    if (base.health <= 0){
        grid.classList.add('fadeOut');
        loseScreen.classList.add('loseFadeIn');
    }       
}

//// ADDEVENTLISTENERS

//Map
towerOne.addEventListener("click", towerA.display.bind(towerA));

towerTwo.addEventListener("click", towerB.display.bind(towerB));


// Start buttons 
startBtn.addEventListener("click", minion.move);
retryBtn.addEventListener("click", function (){
    document.location.reload();

});
nextBtn.addEventListener("click", function (){
    nextBtn.innerHTML = "Stay tuned 😉";
});

//// SET INTERVALS, functions to call


const intervalId = setInterval(() => {
    updatePos();
    checkBaseCollision(foe, b);
    checkEnemyCollision(foe, tile2);
    gainMoney();
    winGame();
    loseGame();
    }, 1000/60);

minion.domRect();

