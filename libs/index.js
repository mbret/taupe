(function(){
   'use strict';
    
    // default timeout
    var animationTimeout = 2000; // 2s

    // Main program
    // Bootstrap
    // Run
    // behavior
    (function($){

        var mole = new Mole( $('#taupe'), moleBehavior );
        var ground = new Ground( $('#ground'), scenes);

        // Prepare ground
        // add all scene with correct width
        ground.prepare();

        $.jInvertScroll(['.scroll'],{
            height: 60000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
            onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                console.log("current perent is " + percent);
                console.log("current scene is " + ground.currentScene);

                // Set current scene
                ground.updateScene(parseFloat(percent));

                // move taupe
                mole.move(parseFloat(percent));

                // throw animation
                miscAnimate(parseFloat(percent));
            }
        });
    }(jQuery));


    /**
     * Throw animation
     * @param percent
     */
    function miscAnimate(percent){
        console.log(percent);
        //var n = parseFloat(percent.toFixed(2));
        _.forEach(animations, function(animation, index){
            if(percent >= animation.range[0] && percent <= animation.range[1]){

                if(animation.played && animation.played === true){
                    return;
                }
                else{
                    //var timeout = (animation.timeout) ? animation.timeout : animationTimeout;
                    Utils.pauseScroll();
                    animation.played = true;
                    animation.event(function(){
                        Utils.resumeScroll();
                    });
                    //animation.played = true;
                    //setTimeout(function(){
                    //    Utils.resumeScroll();
                    //    if(animation.callback){
                    //        animation.callback();
                    //    }
                    //}, timeout);
                    return;
                }
            }
        });
    }

    var scrollHandler = function(e) {
        e.preventDefault();
        e.stopPropagation();
    };
    window.Utils = {
        animationQueue: 0,
        pauseScroll: function(){
            if(Utils.animationQueue < 0) throw Error("Invalid animationQueue", Utils.animationQueue);
            Utils.animationQueue ++;
            $('body').bind('wheel', scrollHandler);
        },
        resumeScroll: function(){
            if(Utils.animationQueue <= 0) throw Error("Invalid animationQueue", Utils.animationQueue);
            Utils.animationQueue --;
            if(Utils.animationQueue === 0){
                $('body').unbind('wheel', scrollHandler);
            }
        }
    }
    
})();