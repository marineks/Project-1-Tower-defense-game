export class Enemy {
    constructor () {
        this.health = 10;
        this.strength = 20;
    
    }
    move() {
        
        // link to CSS animation to make it go to the base

    }
    attackBase(){
        // if (enemy's position = base's position) {
        // base.health = base.health - this.strength
        // enemy.visibility = opacity : 0
        // return base.health
       // } 
    }
    die() {
    if (this.health <= 0) {

    }
    }
}

// Declare new instance of enemy class
export const minion = new Enemy();




// note: their loss of HP is calculated in the attack() of Tower

// ADDITIONAL FEATURE : extends to other types of enemies