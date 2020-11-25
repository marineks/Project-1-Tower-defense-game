class Tower {
    constructor() {
        this.attack = 2;
        this.health = 100;

    }
    display() {
        if (player.money >= 50) {
            selectableTile.classList.remove('grass');
            selectableTile.classList.add('canbetower');
            // moneyCounter.innerHTML = moneyCounter - 50;
        } else {
            throw new Error ("You are too poor to build a tower!");
        }
        
    }
    upgrade() {
        if (player.money >= 100) {
            towerTile.classList.remove('canbetower');
            towerTile.classList.add('upgraded');
            // moneyCounter.innerHTML = moneyCounter - 100;
        } else {
            throw new Error ("You dont have enough money to upgrade the tower!");
        }
    }
    attack(){
        // if (enemy.position is COORDONNEES) {
           // setInterval: toutes les 1.5sec
        // enemy.health = enemy.health - 2
        // add classList "hurt" when the enemy blinks
        // return enemy.health;
    //}
    }
}

const newTower = new Tower();

// Fetch here the elements 

const selectableTile = document.getElementById('canbe');
const towerTile = document.querySelector(".canbetower");

// AddEventListener

selectableTile.addEventListener("click", newTower.display);

towerTile.addEventListener("click", newTower.upgrade);

// ADDITIONAL FEATURE
// class upgradedTower extends Tower {
//     constructor () {
        
//     }
//     appears() {

//     }
//     attack() {

//     }
// }