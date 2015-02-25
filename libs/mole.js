(function(){
    'use strict';

    function Mole($elem, positionScene){
        this.position = 10;
        this.currentScene = null;
        this.isMoving = false;
        this.positionScene = positionScene;
        
        var that = this;

        this.move = function(percent){
            //var n = parseFloat(percent.toFixed(2));
            
            //if(that.isMoving){
            //    return;
            //}
            
            var positionToAffect = null;
            _.forEach(that.positionScene, function(position, index){
                if(percent >= position.range[0] && percent <= position.range[1]){
                    positionToAffect = position;
                    return;
                }
            });
            if( positionToAffect ){
                that.isMoving = true;
                $elem.removeClass($elem.data('currentClass'));
                $elem.addClass(positionToAffect.css);
                $elem.data('currentClass', positionToAffect.css);
                
                console.log(positionToAffect.left + 'px', $elem.css('left'));
                if(positionToAffect.left && (positionToAffect.left + 'px') !== $elem.css('left')){
                    //Utils.pauseScroll();
                    //$elem.animate({
                    //    left: positionToAffect.left
                    //}, 500, function() {
                    //    //that.isMoving = false;
                    //    Utils.resumeScroll();
                    //});
                }

            }
        }

        this.resetPosition = function(){
            console.log('taupe position has been reset');
            that.position = 10;
        }

    }
    
    window.Mole = Mole;
    
})();

