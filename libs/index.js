(function(){
   'use strict';
    
    // default timeout
    var animationTimeout = 2000; // 2s
    var animations = [
        {
            range: [0.01, 0.012],
            name: 'animation 1',
            timeout: 2000, // custom timeout
            event: function(){
                console.log('animation 1');
            },
            callback: function(){
                console.log('callback animation 1')
            }
        },
        {
            range: [1, 1],
            name: 'animation 2',
            event: function(){
                console.log('animation 2');
            }
        },
    ];
    var moleBehavior = [
        {
            range: [0, 0.025],
            css: 'invisible'
        },
        {
            range: [0.025, 0.5],
            css: 'walk',
            animate: {
                behavior: { left: '10%' },
                timeout: 500
            }
        },
        {
            range: [0.10, 0.20],
            left: '10%',
            css: 'walk'
        },
        {
            range: [0.20, 0.30],
            left: '50%',
            css: 'walk'
        },
        {
            range: [0.30, 0.60],
            left: '60%',
            css: 'walk'
        },
        {
            range: [0.60, 1],
            left: '0%',
            css: 'walk'
        },
    ];

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
                    var timeout = (animation.timeout) ? animation.timeout : animationTimeout;
                    Utils.pauseScroll();
                    animation.event();
                    animation.played = true;
                    setTimeout(function(){
                        Utils.resumeScroll();
                        if(animation.callback){
                            animation.callback();
                        }
                    }, timeout);
                    return;
                }
            }
        });
    }

    var scrollHandler = function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    window.Utils = {
        pauseScroll: function(){
            $('body').bind('wheel', scrollHandler);
        },
        resumeScroll: function(){
            $('body').unbind('wheel', scrollHandler);
        }
    }
    
})();