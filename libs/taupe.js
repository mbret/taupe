(function(){
    'use strict';

    function Taupe(){
        this.position = 10;
        this.currentScene = null;
        this.isMoving = false;
        this.positionScene = {
            0: '0%',
            0.01: '10%',
            0.02: '10%',
            0.03: '20%',
            0.04: '30%',
            0.2: '50%',
            0.3: '60%',
            0.4: '0%',
            0.5: '0%',
            0.6: '0%',
            0.7: '0%',
            0.8: '0%',
            0.9: '0%',
            1: '0%'
        }
        var that = this;

        this.move = function(percent){
            var n = parseFloat(percent.toFixed(2));
            
            if(that.isMoving){
                return;
            }
            
            if( that.positionScene[n]){
                that.isMoving = true;
                $( "#taupe" ).animate({
                    left: that.positionScene[n]
                }, 500, function() {
                    that.isMoving = false;
                });
            }
        }

        this.resetPosition = function(){
            console.log('taupe position has been reset');
            that.position = 10;
        }

    }
    
    window.Taupe = Taupe;
    
})();

