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
    //  display div with a gif visiblity !hidden and the message "Yay, you won!" 
    // + triggers the possibility to retry 
    //}
}

// When the base dies


function loseGame () {
            setTimeout(function(){
                if (base.health <= 0){
                    // display the lose window!
                }
            }, 1000)
        
}