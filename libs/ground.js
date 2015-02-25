(function(){
    'use strict';

    function Ground( $elem, scenes ){

        this.scenes = scenes;
        var that = this;
        
        this.prepare = function(){
            var totalWidth = 50;
            var windowWidth = $(window).width();
            _.forEach(scenes, function(n, key){
                $elem.append('<div class="scene" id="' + key + '" ></div>');
                totalWidth += windowWidth;
            });
            
            $('.scene').css({'width':windowWidth});
            $elem.css({'width': totalWidth})
        }
    }
    
    window.Ground = Ground;
    
})();

