(function(){
    'use strict';

    function Ground( $elem, scenes ){

        this.scenes = scenes;
        this.currentScene = "";
        var that = this;
        
        this.prepare = function(){
            var totalWidth = 50;
            var windowWidth = $(window).width();
            _.forEach(scenes, function(scene, index){
                $elem.append('<div class="scene" id="' + scene.name + '" ></div>');
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
            _.forEach(that.scenes, function(scene, index){
                if(percent >= scene.range[0] && percent <= scene.range[1]){
                    name = scene.name;
                }
            });
            return name;
        };
    }
    
    window.Ground = Ground;
    
})();

