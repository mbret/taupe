var animations = [
    {
        range: [1, 1],
        name: 'animation 1',
        event: function(cb){
            console.log('animation 1');
            setTimeout(function(){
                console.log('callback animation 1');
                cb();
            }, 2000);
        }
    },
    {
        range: [0.0017, 0.0034],
        name: 'test son',
        event: function(cb){
            Sounds.playChosedSound(2, function(){
                console.log('callback test son');
                cb();
            });
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