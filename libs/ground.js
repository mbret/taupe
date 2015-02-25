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
                $elem.append('<img class="scene" data-bg="' + scene.bg + '" src="' + scene.bg + '" id="' + scene.name + '" ></img>');
                //console.log($("[data-bg='" + scene.bg + "'"));
                //var $appended = $("[data-bg='" + scene.bg + "'");
                //console.log($appended.data('bg'));
                //$appended.css('background-image', 'url(' + $appended.data('bg') + ')');
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

