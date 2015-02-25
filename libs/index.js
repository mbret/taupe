(function(){
   'use strict';
    
    // default timeout
    var animationTimeout = 2000; // 2s
    var animations = [
        {
            range: [0, 0],
            name: 'animation 1',
            timeout: 1000, // custom timeout
            event: function(){
                console.log('animation 1');
            }
        },
        {
            range: [0, 0],
            name: 'animation 1',
            event: function(){
                console.log('animation 2');
            }
        },
        {
            range: [0, 0],
            name: 'animation 1',
            event: function(){
                console.log('animation 3');
            }
        },
        {
            range: [0, 0],
            name: 'animation 1',
            event: function(){
                console.log('animation 4');
            }
        },
        {
            range: [0, 0],
            name: 'animation 1',
            event: function(){
                console.log('animation 5');
            }
        }
    ];
    var moleBehavior = [
        {
            range: [0, 0.10],
            left: '0%',
            css: 'walk'
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


    var scrollHandler = function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    function pauseScroll(){
        $('body').bind('wheel', scrollHandler);
    }
    function resumeScroll(){
        $('body').unbind('wheel', scrollHandler);
    }
    
    /**
     * Throw animation
     * @param percent
     */
    function miscAnimate(percent){
        console.log(percent);
        //var n = parseFloat(percent.toFixed(2));
        _.forEach(animations, function(animation, index){
            if(percent >= animation.range[0] && percent <= animation.range[1]){

                var timeout = (animation.timeout) ? animation.timeout : animationTimeout;
                pauseScroll();
                animation.event();
                setTimeout(function(){
                    resumeScroll();
                }, timeout);
                
                return;
            }
        });
    }
    
})();