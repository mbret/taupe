var moleBehavior = [
    {
        range: [0, 0.025],
        css: 'invisible'
    },
    {
        range: [0.025, 0.5],
        css: 'walk',
        animate: {
            behavior: { left: '10%' },
            timeout: 500
        }
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