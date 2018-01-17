new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameRunning: false,
        
    },
    methods:{
        startGame: function(){
            this.gameRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
        },
        attack:function(){
            this.monsterHealth -= this.calculateDamage(10, 3)
            if (this.checkWin()) {return;} 

            this.monsterAttacks() 
        },
        specialAttack:function(){
            this.monsterHealth -= this.calculateDamage(20, 10);
            if (this.checkWin()) {
              return;
            }

            this.monsterAttacks(); 
        },
        heal:function(){
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100
            }

        },
        giveUp:function(){
            this.gameRunning = false;
        },
        monsterAttacks: function(){
            this.playerHealth -= this.calculateDamage(12, 3);
            if (this.checkWin()) {
              return;
            } 
        },
        calculateDamage:function(maximum, minumum){
            return Math.max(Math.floor(Math.random() * maximum) + 1);
        },
        checkWin: function(){
           if (this.monsterHealth <= 0) {
               if (confirm("Congratulations! You have Won! Would you like to play again?")) {
                   this.startGame()
               }else{
                this.gameRunning = false;
               }
             return true;
           } else if (this.playerHealth <= 0) {
               if(confirm("Oh no! The Monster has won.. Would you like to try again?")){
                this.startGame()
               }else{
                this.gameRunning = false;
               }
               return true
           }
           return false
        }
    }
})