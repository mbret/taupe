var animations = [
    {
        range: [0, 0.0017],
        name: 'animation 1',
        event: function(cb){
            Sounds.playChosedSound(1, function(){
                cb();
            });
        }
    },
    {
        range: [0.0020, 0.0034],
        name: 'animation 1',
        event: function(cb){
            $(".anim1").removeClass("hide");
            $(".anim1").addClass("caca1");
            setTimeout(function(){
                $(".anim1").addClass("hide");
                $(".anim2").removeClass("hide");
                $(".anim2").addClass("venere");
                setTimeout(function(){
                    $(".anim2").addClass("ground-clean");
                    Sounds.playChosedSound(2, function(){
                        $(".anim2").removeClass("ground-clean");
                        $(".anim2").addClass("hide");
                        $("#taupe").addClass("walk");

                        cb();
                    });
                }, 3000);
            }, 1800);
        }
    },
    //{
    //    range: [0.0017, 0.0034],
    //    name: 'animation 2',
    //    event: function(cb){
    //        $(".anim2").removeClass("hide");
    //        $(".anim2").addClass("venere");
    //        setTimeout(function(){
    //            $(".anim2").addClass("ground-clean");
    //            //Sounds.playChosedSound(2, function(){
    //                console.log('callback test son');
    //                $(".anim2").removeClass("ground-clean");
    //                $(".anim2").addClass("hide");
    //                $("#taupe").addClass("walk");
    //
    //                cb();
    //            //});
    //        }, 3000);
    //    }
    //},
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
        range: [0.0811, 0.0828],
        name: 'animation 4',
        event: function(cb){
            $(".anim4").removeClass("hide");
            $(".anim4").addClass("culois");
            setTimeout(function(){
                $(".anim4").addClass("hide");
                $(".oiseauback").removeClass("hide");
                $(".crottepig").removeClass("hide");
                Sounds.playChosedSound(4, function(){
                    $(".oiseauback").addClass("hide");

                    cb();
                });
                setTimeout(function(){
                    $(".crottepig").animate({ "top": "+=97%" }, "slow" );
                },2000)
                setTimeout(function(){
                    $(".crottepig").addClass("hide");
                },5000)
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
            $(".piedchev").animate({ "top": "+=130%" }, "slow" );
            setTimeout(function(){
                async.parallel([
                    function(callback){
                        Sounds.playChosedSound(6, function(){
                            setTimeout(function(){
                                $(".piedchev").animate({ "top": "-=90%" }, "slow" );
                                callback();
                            },1000)
                        });
                    },
                    function(callback){
                        $(".anim7").removeClass("hide");
                        setTimeout(function(){
                            $(".anim7").addClass("cacachev");
                            setTimeout(function(){
                                $(".anim7").addClass("hide");
                                $(".crottechev").removeClass("hide");
                                callback();
                            },800);
                        },5000);
                    }
                ], function(){
                    cb();
                });
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
        range: [0.186, 0.187],
        name: 'animation 9',
        event: function(cb){
            $(".lapin2").removeClass("hide");
            $(".lapin2").animate({ "left": "-=50%" }, "slow" );
            setTimeout(function(){
                async.parallel([
                    function(callback){
                        Sounds.playChosedSound(8, function(){
                            setTimeout(function(){
                                $(".lapin2").animate({ "left": "+=50%" }, "slow" );
                                $(".tascrotte").addClass("hide");
                                callback();
                            },1000)
                        });
                    },
                    function(callback){
                        $(".anim9").removeClass("hide");
                        setTimeout(function(){
                            $(".anim9").addClass("cacalap");
                            setTimeout(function(){
                                $(".anim9").addClass("hide");
                                $(".cacalap").addClass("hide");
                                $(".tascrotte").removeClass("hide");
                                callback();
                            },6000);
                        },2000);
                    }
                ], function(){
                    cb();
                });
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
        range: [0.222, 0.224],
        name: 'animation 10bis',
        event: function(cb){
            Sounds.playChosedSound(16, function(){
                cb();
            });
        }
    },
    {
        range: [0.246, 0.248],
        name: 'animation 11',
        event: function(cb){
            $(".dogscene").removeClass("hide");
            $(".dogscene").animate({ "left": "-=69%" }, "slow" );
            Sounds.playChosedSound(17, function(){
                //$(".dogscene").animate({ "left": "+=69%" }, "slow" );
                setTimeout(function(){
                    Sounds.playChosedSound(18, function(){
                        Sounds.playChosedSound(19, function(){
                            $(".perso").addClass("hide");
                            $(".crotteTaupe").removeClass("hide");
                            $(".crotteTaupe").animate({ "top": "+=26%" }, "slow" );
                            setTimeout(function(){
                                $(".dogscene").animate({ "left": "+=69%" }, "slow" );
                                $(".dogscene").addClass("hide");
                                $(".perso").removeClass("hide");
                                $(".crotteTaupe").addClass("hide");

                                cb();
                            }, 4000);
                        });
                    });
                }, 2000);
            });
        }
    },
    {
        range: [0.26, 1],
        name: 'animation 12',
        event: function(cb){
            Sounds.playChosedSound(20, function(){

            });
        }
    },
];