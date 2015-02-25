(function(){
    'use strict';

    function Ground( $elem, scenes ){

        this.scenes = scenes;
        var that = this;
        
        this.prepare = function(){
            _.forEach(scenes, function(n, key){
                $elem.append('<div class="scene" id="' + key + '" ></div>');
                
            });
            var windowWidth = $(window).width();
            $('.scene').css({'width':windowWidth});
        }
    }
    
    window.Ground = Ground;
    
})();

