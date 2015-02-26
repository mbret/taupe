var animations = [
    {
        range: [0, 0.0017],
        name: 'animation 1',
        event: function(cb){
            $(".anim1").removeClass("hide");
            $(".anim1").addClass("caca1");
            setTimeout(function(){
                $(".anim1").addClass("hide");
                console.log('callback animation 1');
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
                //Sounds.playChosedSound(2, function(){
                    console.log('callback test son');
                    $(".anim2").removeClass("ground-clean");
                    $(".anim2").addClass("hide");
                    $("#taupe").addClass("walk");

                    cb();
                //});
            }, 1000);
        }
    },
    {
        range: [0.044, 0.045],
        name: 'animation 3',
        event: function(cb){
            $(".anim3").removeClass("hide");
            $(".anim3").addClass("animois");
            setTimeout(function(){
                $(".anim3").addClass("hide");
            }, 2000);
            cb();
        }
    },
    {
        range: [1000,1000],
        name: 'animation 4',
        event: function(cb){
            $(".anim4").removeClass("hide");
            $(".anim4").addClass("culois");
            setTimeout(function(){
                $(".anim4").addClass("hide");
            }, 2000);
            cb();
        }
    },
    {
        range: [1000,1000],
        name: 'animation 5',
        event: function(cb){
            $(".anim5").removeClass("hide");
            $(".anim5").addClass("");
            setTimeout(function(){
                $(".anim5").addClass("hide");
            }, 2000);
            cb();
        }
    },
    {
        range: [1000,1000],
        name: 'animation 6',
        event: function(cb){
            $(".anim6").removeClass("hide");
            $(".anim6").addClass("");
            setTimeout(function(){
                $(".anim6").addClass("hide");
            }, 2000);
            cb();
        }
    },
    {
        range: [1000,1000],
        name: 'animation 7',
        event: function(cb){
            $(".anim7").removeClass("hide");
            $(".anim7").addClass("");
            setTimeout(function(){
                $(".anim7").addClass("hide");
            }, 2000);
            cb();
        }
    },
    {
        range: [1000,1000],
        name: 'animation 8',
        event: function(cb){
            $(".anim8").removeClass("hide");
            $(".anim8").addClass("");
            setTimeout(function(){
                $(".anim8").addClass("hide");
            }, 2000);
            cb();
        }
    },
    {
        range: [1000,1000],
        name: 'animation 9',
        event: function(cb){
            $(".anim9").removeClass("hide");
            $(".anim9").addClass("");
            setTimeout(function(){
                $(".anim9").addClass("hide");
            }, 2000);
            cb();
        }
    },
    {
        range: [1000,1000],
        name: 'animation 10',
        event: function(cb){
            $(".anim10").removeClass("hide");
            $(".anim10").addClass("");
            setTimeout(function(){
                $(".anim10").addClass("hide");
            }, 2000);
            cb();
        }
    },
    {
        range: [1000,1000],
        name: 'animation 11',
        event: function(cb){
            $(".anim11").removeClass("hide");
            $(".anim11").addClass("");
            setTimeout(function(){
                $(".anim11").addClass("hide");
            }, 2000);
            cb();
        }
    },
];