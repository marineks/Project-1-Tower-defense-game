// export Enemy
import { Enemy, minion } from "./3 - enemy.js";
console.log(Enemy);
console.log(minion);

// Player's money
let player = {
    name: "Rodrigo",
    money : 100,
}

function updateMoney (){
    
    const moneyCounter = document.getElementById('gold-counter');
    moneyCounter.textContent = player.money;

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
    
