//Finalement il n'y aura qu'une instance de base donc juste une const

// class Base {
//     constructor(health) {
//         this.health = health;
//     }
// }

const base = {
    health : 200,
    attack: 0,
};

function updateHealth (){

    const baseHealth = document.getElementById('life-value');

    baseHealth.textContent = base.health;

};

updateHealth(); // éventuellement mettre un timer pour que le jeu réactualise 

function winGame () {
    // all enemies are dead == if (enemyArmy.length = 0 && base.health > 0) {
    //  display div with a gif and the message "Yay, you won!" 
    // + triggers the possibility to retry 
    //}
}

// When the base dies
// put a set interval or setTime out(?) to make the game check every 1 sec 
    //if the game is lost. 

function loseGame () {
        //     setTimeout(function(){
        //         if (base.health <= 0){
        //             // display the lose window!
        //         }
        //     }, 1000)
        
}