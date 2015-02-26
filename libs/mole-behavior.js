var moleBehavior = [
    // no taupe
    {
        range: [0, 0.0017],
        css: 'invisible'
    },
    // taupe walk scene 1 -> scene 2
    {
        range: [0.0034, 0.044],
        css: 'walk',
        animate: {
            behavior: { left: '15%', bottom: '3%' },
            timeout: 500
        }
    },
    // taupe is angry and look at the sky
    {
        range: [0.047, 0.049],
        left: '15%',
        bottom: '3%',
        css: 'angry'
    },
    // taupe walk
    {
        range: [0.049, 0.0795],
        left: '15%',
        bottom: '3%',
        css: 'walk'
    },
    // move a bit forward to avoid bird shit
    {
        range: [0.0795, 0.096],
        animate: {
            behavior: { left: '50%' },
            timeout: 500
        },
        bottom: '3%',
        css: 'walk'
    },
    // mole get bird shit
    {
        range: [0.0811, 0.0828],
        left: '50%',
        bottom: '3%',
        css: 'bird-shit'
    },
    {
        range: [0.0828, 0.0913],
        animate: {
            behavior: { left: '40%' },
            timeout: 500
        },
        bottom: '3%',
        css: 'walk'
    },
    // horse finger
    {
        range: [0.0913, 0.0920],
        left: '40%',
        bottom: '3%',
        css: 'horse-finger'
    },
    {
        range: [0.0920, 0.115],
        left: '40%',
        bottom: '3%',
        css: 'walk'
    },
    // horse sit
    {
        range: [0.115, 0.116],
        left: '40%',
        bottom: '3%',
        css: 'horse-sit'
    },
    {
        range: [0.116, 0.126],
        left: '40%',
        bottom: '3%',
        css: 'walk'
    },
    {
        range: [0.126, 0.128],
        animate: {
            behavior: { left: '30%' },
            timeout: 500
        },
        bottom: '3%',
        css: 'walk'
    },
    {
        range: [0.14, 0.142],
        animate: {
            behavior: { left: '20%' },
            timeout: 500
        },
        bottom: '3%',
        css: 'walk'
    },
    {
        range: [0.15, 0.164],
        animate: {
            behavior: { left: '10%' },
            timeout: 500
        },
        bottom: '3%',
        css: 'walk'
    },
    // rabbit
    {
        range: [0.164, 0.166],
        left: '10%',
        bottom: '3%',
        css: 'rabitt1'
    },
    {
        range: [0.166, 1],
        left: '10%',
        bottom: '3%',
        css: 'walk'
    },
    // goat 1
    {
        range: [0.186, 0.187],
        left: '10%',
        bottom: '3%',
        css: 'goat12'
    },
    // goat 12
    {
        range: [0.187, 0.189],
        left: '10%',
        bottom: '3%',
        css: 'goat1'
    },
    {
        range: [0.189, 0.190],
        left: '10%',
        bottom: '3%',
        css: 'walk'
    },
    {
        range: [0.190, 0.191],
        animate: {
            behavior: { left: '-5%' },
            timeout: 500
        },
        bottom: '3%',
        css: 'walk'
    },
    // goat 2
    {
        range: [0.191, 0.1935],
        left: '-5%',
        bottom: '3%',
        css: 'goat2'
    },
    {
        range: [0.2037, 0.213],
        animate: {
            behavior: { left: '10%' },
            timeout: 500
        },
        bottom: '3%',
        css: 'walk'
    },
    // flies 1
    {
        range: [0.213, 0.215],
        left: '10%',
        bottom: '3%',
        css: 'flies1'
    },
    {
        range: [0.215, 0.217],
        animate: {
            behavior: { left: '20%' },
            timeout: 500
        },
        bottom: '3%',
        css: 'walk'
    },
];