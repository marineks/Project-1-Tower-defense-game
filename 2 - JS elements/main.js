// DECLARATION OF VARIABLES
let player = {
    name: "Rodrigo",
    money : 100,
}

const base = {
    health : 200,
    attack: 0,
};

class Tower {
    constructor() {
        this.attack = 6;
        this.health = 100;

    }
    display() {
        if (player.money >= 50) {
            //selectableTile.classList.remove('grass');
            selectableTile.classList.add('canbetower');
            moneyCounter.innerHTML = player.money - 50;
        } else {
            throw new Error ("You are too poor to build a tower!");
        }
        
    }
    upgrade() {
        if (player.money >= 100) {
            towerTile.classList.remove('canbetower');
            towerTile.classList.add('upgraded');
            moneyCounter.innerHTML = player.money - 100;
        } else {
            throw new Error ("You dont have enough money to upgrade the tower!");
        }
    }
    attack(){
        // if (enemy.position < position.x && enemy.position > position.y) {
           // setInterval(function dmgBase(){
             //  enemy.health = enemy.health - 2;
            // add classList "hurt" when the enemy blinks
        //   }, 1000) 
        // 
        // return enemy.health;
    //}
    }
}


class Enemy {
    constructor () {
        this.health = 10;
        this.strength = 20;
        this.positionx = 0;
    
    }
    domRect(){
        const horde = document.getElementById('enemy');
        let currentPos = horde.getBoundingClientRect();
        //console.log("curr po", currentPos);
        return currentPos;
    }
    move() {
        horde.classList.add('moving');
    }
    attackBase(){      
        
        base.health = base.health - this.strength;
        updateHealth();
        horde.style.visibility = "hidden"
        setTimeout(()=>horde.style.visibility = "visible",1000)
        horde.classList.remove('moving'); // make the enemy disappear
        return base.health;
       
    }
    die() {
        if (this.health <= 0) {
            horde.classList.remove('enemy'); //make the enemy disappear
            this.strength = 0; // remove its strength so it cant hurt the base
            
        }
    }
}

 const newTower = new Tower();
 const minion = new Enemy();

 minion.domRect();

  // FETCH HTML ELEMENTS

 // Map

const selectableTile = document.querySelector('.canbe')
const towerTile = document.querySelector('.canbetower');

// Buttons
const startBtn = document.getElementById('startBtn');
const retryBtn = document.getElementById('retryBtn');

// Entities
const horde = document.getElementById('enemy');
const castle = document.getElementById('base');
console.log("fetch castle", )
// Status bar
const moneyCounter = document.getElementById('gold-counter');
const baseHealth = document.getElementById('life-value');

// ADDEVENTLISTENERS

//Map
selectableTile.addEventListener("click", newTower.display);
towerTile.addEventListener("click", newTower.upgrade);

// Start buttons 
startBtn.addEventListener("click", minion.move);
retryBtn.addEventListener("click", function (){
    retryBtn.textContent = "YoU cAn jUsT rEfResH thE pAge";
});

 // CHECK COLLISIONS

 // Attack of the base
 var foe = minion.domRect();
 var b = castle.getBoundingClientRect();
 console.log("b", b);
 console.log("foe", foe);

 function updatePos() {
      foe = minion.domRect();
    //console.log("foe int", foe);
    return foe;
 }
    // memento for DomRect:
    //      left = x
    //      top = y
    //      right = x + width
    //      bottom = y + height

 function checkBaseCollision(foe, b) {  
    
        if (foe.x <= (b.x+b.width)) {
            console.log("je touche la base");
            minion.attackBase();
 }
    //requestAnimationFrame(minion.attackBase());
    //console.log("collision?");
 }

 setInterval(() => {
    updatePos();
     checkBaseCollision(foe, b);
    }, 1000/60);
 //requestAnimationFrame(minion.attackBase());

 // Attack of the tower
 function checkEnemyCollision(foe, tile){
    if (foe.x <= (b.x+b.width)) {
        console.log("je touche l'ennemi");
        minion.attackBase();
    }
 }



// SHOP MECHANICS

function updateMoney (){
    const moneyCounter = document.getElementById('gold-counter');
    moneyCounter.textContent = player.money;
};

function gainMoney(){
    
    if (minion.health === 0) {
        const moneyCounter = document.getElementById('gold-counter');
        console.log("hey I'm the money counter!", moneyCounter);
         return moneyCounter.textContent = player.money + 20;
    }
};

updateMoney();
gainMoney();
    

// WIN LOSE MECHANICS

function updateHealth (){
    const baseHealth = document.getElementById('life-value');
    baseHealth.textContent = base.health;
console.log(base.health)
};

 // éventuellement mettre un timer pour que le jeu réactualise 

function winGame () {
    // all enemies are dead == if (enemyArmy.length = 0 && base.health > 0) {
    //  display div with a gif visiblity !hidden and the message "Yay, you won!" 
    // + triggers the possibility to retry 
    //}
}

function loseGame () {
            setTimeout(function(){
                if (base.health <= 0){
                    // display the lose window!
                }
            }, 1000)
        
}

