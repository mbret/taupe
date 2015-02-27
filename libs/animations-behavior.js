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
        range: [0.047, 0.049],
        name: 'animation 3',
        event: function(cb){
            $(".anim3").removeClass("hide");
            $(".anim3").addClass("animois");
            setTimeout(function(){
                $(".anim3").addClass("hide");
                $(".oiseaufront").removeClass("hide");
                Sounds.playChosedSound(3, function(){
                    $(".oiseaufront").addClass("hide");

                    cb();
                });
            }, 800);
        }
    },
    {
        range: [0.0795, 0.096],
        name: 'animation 4',
        event: function(cb){
            $(".anim4").removeClass("hide");
            $(".anim4").addClass("culois");
            setTimeout(function(){
                $(".anim4").addClass("hide");
                $(".oiseauback").removeClass("hide");
                Sounds.playChosedSound(4, function(){
                    $(".oiseauback").addClass("hide");

                    cb();
                });
            }, 800);
        }
    },
    {
        range: [0.0913, 0.0920],
        name: 'animation 5',
        event: function(cb){
            $(".anim5").removeClass("hide");
            $(".anim5").addClass("chev");
            setTimeout(function(){
                $(".anim5").addClass("hide");
                $(".cheval").removeClass("hide");
                Sounds.playChosedSound(5, function(){
                    $(".cheval").addClass("hide");
                    cb();
                });
            }, 800);
            
        }
    },
    {
        range: [0.115, 0.116],
        name: 'animation 6',
        event: function(cb){
            $(".piedchev").removeClass("hide");
            $(".piedchev").animate({ "top": "+=90%" }, "slow" );
            setTimeout(function(){
                Sounds.playChosedSound(6, function(){
                    
                    setTimeout(function(){
                        $(".piedchev").animate({ "top": "-=90%" }, "slow" );

                        cb();
                    },1000)
                });
                $(".anim7").removeClass("hide");
                setTimeout(function(){
                    $(".anim7").addClass("cacachev");
                    setTimeout(function(){
                        $(".anim7").addClass("hide");
                        $(".crottechev").removeClass("hide");
                    },800);
                },5000);
            }, 1000);
        }
    },
    {
        range: [0.116, 0.126],
        name: 'animation 7',
        event: function(cb){
            $(".crottechev").addClass("hide");
            cb();            
        }
    },
    {
        range: [0.164, 0.166],
        name: 'animation 8',
        event: function(cb){
            $(".lapin").removeClass("hide");
            $(".lapin").animate({ "left": "-=50%" }, "slow" );

                Sounds.playChosedSound(7, function(){
                    $(".lapin").animate({ "left": "+=50%" }, "slow", function(){$(".lapin").addClass("hide");} );
                    cb();
                });
        }
    },
    {
        range: [0.187, 0.189],
        name: 'animation 9',
        event: function(cb){
            $(".lapin2").removeClass("hide");
            $(".lapin2").animate({ "left": "-=50%" }, "slow" );
            setTimeout(function(){
                Sounds.playChosedSound(8, function(){
                    
                    setTimeout(function(){
                        $(".lapin2").animate({ "left": "+=50%" }, "slow" );
                        $(".tascrotte").addClass("hide");
                        cb();
                    },1000)

                });
                $(".anim9").removeClass("hide");
                setTimeout(function(){
                    $(".anim9").addClass("cacalap");
                    setTimeout(function(){
                        $(".anim9").addClass("hide");
                        $(".cacalap").addClass("hide");
                        $(".tascrotte").removeClass("hide");
                    },6000);
                },2000);
            }, 1000);
        }
    },
    {
        range: [0.213, 0.215],
        name: 'animation 10',
        event: function(cb){
            $(".flies").removeClass("hide");
            $(".flies").animate({ "left": "-=50%" }, "slow" );
            setTimeout(function(){
                Sounds.playChosedSound(15, function(){
                    $(".flies").animate({ "left": "+=50%" }, "slow" );
                    cb();
                });
            }, 2000);
        }
    },
    {
        range: [1000,1000],
        name: 'animation 11',
        event: function(cb){
            $(".anim11").removeClass("hide");
            $(".anim11").addClass("cacaTaupe");
            setTimeout(function(){
                $(".anim11").addClass("hide");
                $(".crotteTaupe").removeClass("hide");

                cb();
            }, 2000);
        }
    },
    {
        range: [1000,1000],
        name: 'animation 11',
        event: function(cb){
            $(".crotteTaupe").addClass("hide");
            cb();
        }
    },
];