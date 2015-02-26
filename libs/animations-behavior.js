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