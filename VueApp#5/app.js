new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameRunning: false,
        turns:[]
    },
    methods:{
        startGame: function(){
            this.gameRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
            this.turns = [];
        },
        attack:function(){
            var damage = this.calculateDamage(10, 3);
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster with ' + damage + ' amount of damage'
            })
            if (this.checkWin()) {return;} 

            this.monsterAttacks() 
        },
        specialAttack:function(){
            var damage = this.calculateDamage(20, 10);
            this.monsterHealth -= damage;
            this.checkWin();
            this.turns.unshift({
              isPlayer: true,
              text: "Player hits Monster with special Attack causing " + damage + " amount of damage"
            });

            this.monsterAttacks(); 
        },
        heal:function(){
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player has healed health by 10'
                })

            } else {
                this.playerHealth = 100;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player has healed health to 100'
                })
            }

            this.monsterAttacks()
        },
        giveUp:function(){
            this.gameRunning = false;
            this.turns = []
        },
        monsterAttacks: function(){
            var damage = this.calculateDamage(12, 3);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
              isPlayer: false,
              text: "Monster hits Player with " +
                damage + " amount of damage"
            });

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