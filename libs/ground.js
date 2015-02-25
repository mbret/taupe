(function(){
    'use strict';

    function Ground( $elem, scenes ){

        this.scenes = scenes;
        this.currentScene = "";
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
        };

        this.updateScene = function(percent){
            that.currentScene = inScene(percent);
        };
        
        /**
         * Give the actual scene name.
         * @param percent
         * @returns {*}
         */
        function inScene(percent){
            var name = "";
            _.forEach(that.scenes, function(scene, key){
                if(percent >= scene[0] && percent <= scene[1]){
                    name = key;
                }
            });
            return name;
        };
    }
    
    window.Ground = Ground;
    
})();

