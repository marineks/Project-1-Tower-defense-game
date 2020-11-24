// export Enemy class
class Enemy {
    constructor () {
        this.health = 10;
        this.strength = 20;
    //     this.speed = speed;
    // }
    // move() {
    //     // setInterval to determine waves of enemy
    //     // link to CSS animation to make it go to the base

    // }
    // attackBase(){
    //     // if (enemy's position = base's position) {
    //     // base.health = base.health - this.strength
    //     // enemy.visibility = opacity : 0
    //     // return base.health
    //    // } 
    // }
}
}

// note: their loss of HP is calculated in the attack() of Tower

// Player's money



// Declare new instance of enemy class
const minion = new Enemy();

// Update money
let playerMoney = 100;  

function updateMoney (){
    
    const moneyCounter = document.getElementById('gold-counter');
    moneyCounter.textContent = playerMoney;

};

updateMoney(); 

// Handle function

function gainMoney(){
    
    if (minion.health === 0) {
        const moneyCounter = document.getElementById('gold-counter');
        console.log("hey I'm the money counter!", moneyCounter);
         return moneyCounter.textContent = player.money + 20;
    }
  
};

gainMoney();
    
