(function(){
   'use strict';
    
    var nbScenes = 5;
    var scenesNames = ['scene a', 'scene b', 'scene c', 'scene d', 'offset'];
    var scenes = [
        {
            name : scenesNames[0],
            bg: 'scenea.jpg',
            range: [0, 0.25]
        },
        {
            name : scenesNames[1],
            bg: 'scenea.jpg',
            range: [0.25, 0.5]
        },
        {
            name : scenesNames[2],
            bg: 'scenea.jpg',
            range: [0.5, 0.75]
        },
        {
            name : scenesNames[3],
            bg: 'scenea.jpg',
            range: [0.75, 1]
        },
        {
            name : scenesNames[4],
            bg: 'scenea.jpg',
            range: [1, 1]
        },
    ];
    var animations = [
        {
            time: 0.01,
            name: 'animation 1',
            event: function(){
                console.log('animation 1');
            }
        },
        {
            time: 0.01,
            name: 'animation 1',
            event: function(){
                console.log('animation 2');
            }
        },
        {
            time: 0.01,
            name: 'animation 1',
            event: function(){
                console.log('animation 3');
            }
        },
        {
            time: 0.01,
            name: 'animation 1',
            event: function(){
                console.log('animation 4');
            }
        },
        {
            time: 0.01,
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


    /**
     * Throw animation
     * @param percent
     */
    function miscAnimate(percent){

        var n = parseFloat(percent.toFixed(2));
        _.forEach(animations, function(animation, index){
            if(animation.time === n){
                animation.event();
            }
        });
    }
    
})();