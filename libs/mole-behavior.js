var moleBehavior = [
    // no taupe
    {
        range: [0, 0.0017],
        css: 'invisible'
    },
    // taupe in ground
    {
        range: [0.0017, 0.0034],
        css: 'ground-clean'
    },
    // taupe walk scene 1 -> scene 2
    {
        range: [0.0034, 0.044],
        css: 'walk',
        animate: {
            behavior: { left: '15%' },
            timeout: 500
        }
    },
    // taupe is angry and look at the sky
    {
        range: [0.044, 0.045],
        css: 'angry'
    },
    // taupe walk
    {
        range: [0.045, 0.1],
        css: 'walk'
    },
    // move a bit forward to avoid bird shit
    {
        range: [0.094, 0.096],
        animate: {
            behavior: { left: '50%' },
            timeout: 500
        },
        css: 'walk'
    },
    // mole get bird shit
    {
        range: [0.10, 0.103],
        css: 'bird-shit'
    },
    {
        range: [0.103, 0.105],
        animate: {
            behavior: { left: '10%' },
            timeout: 500
        },
        css: 'walk'
    },
    {
        range: [0.14, 0.142],
        animate: {
            behavior: { left: '15%', bottom: '5%' },
            timeout: 500
        },
        css: 'walk'
    },
    {
        range: [0.234, 0.235],
        animate: {
            behavior: { left: '10%', bottom: '10%' },
            timeout: 500
        },
        css: 'walk'
    },
    {
        range: [0.289, 0.29],
        animate: {
            behavior: { left: '9%', bottom: '0%' },
            timeout: 500
        },
        css: 'walk'
    },
    {
        range: [0.546, 0.55],
        animate: {
            behavior: { left: '10%', bottom: '5%' },
            timeout: 500
        },
        css: 'walk'
    },
    {
        range: [0.63, 0.64],
        animate: {
            behavior: { left: '11%', bottom: '0%' },
            timeout: 500
        },
        css: 'walk'
    },
];