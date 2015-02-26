var animations = [
    {
        range: [0, 0.0017],
        name: 'animation 1',
        event: function(cb){
            $(".anim1").removeClass("hide");
            $(".anim1").addClass("caca1");
            setTimeout(function(){
                $(".anim1").addClass("hide");
                console.log('callback animation 1')
                cb();
            }, 2000);
        }
    },
    {
        range: [0.0017, 0.0034],
        name: 'test son',
        event: function(cb){
            $(".anim2").removeClass("hide");
            $(".anim2").addClass("venere");
            setTimeout(function(){
                $(".anim2").addClass("ground-clean");
                Sounds.playChosedSound(2, function(){
                    console.log('callback test son');
                    $(".anim2").removeClass("ground-clean");
                    $(".anim2").addClass("hide");
                    $("#taupe").addClass("walk");

                    cb();
                });
            }, 1000);
        }
    },
    {
        range: [1, 1],
        name: 'animation 2',
        event: function(cb){
            console.log('animation 2');
            cb();
        }
    },
];