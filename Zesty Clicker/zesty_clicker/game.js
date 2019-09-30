var game = {
    count: 0,
    autoClick: 0,
    progress: 0,
    stats: {
        clicks: 0,
        spent: 0,
    },
    settings: [
        {
            id: 'performanceCB',
            label: 'Performance',
            value: true
        },
        {
            id: 'soundCB',
            label: 'Sound',
            value: false
        },
        {
            id: 'autosaveCB',
            label: 'Autosave',
            value: true
        },
    ],
    shop: [
        {
            name: 'Clicking Power',
            basePrice: 100,
            currentPrice: 100,
            baseUpgradePrice: 10000,
            upgradePrice: 10000,
            clickPower: 1,
            level: 1,
            upgradeLevel: 0,
            tooltip: "Increases the power of each click by",
            image: 'images/cursor.png',
        },
        {
            name: 'Harold',
            basePrice: 10,
            currentPrice: 10,
            baseUpgradePrice: 1000,
            upgradePrice: 1000,
            level: 0,
            upgradeLevel: 0,
            autoClickPower: 0.1,
            image: 'images/harold.png',

        },
        {
            name: 'lime Tree',
            basePrice: 100,
            currentPrice: 100,
            baseUpgradePrice: 5000,
            upgradePrice: 5000,
            level: 0,
            upgradeLevel: 0,
            autoClickPower: 10,
            image: 'images/lime-tree.png',
        },
        {
            name: 'Greenhouse',
            basePrice: 1000,
            currentPrice: 1000,
            baseUpgradePrice: 18000,
            upgradePrice: 18000,
            level: 0,
            upgradeLevel: 0,
            autoClickPower: 150,
            image: 'images/greenhouse.png',
        },
        {
            name: 'Organic Farm',
            basePrice: 15000,
            currentPrice: 15000,
            baseUpgradePrice: 80000,
            upgradePrice: 80000,
            level: 0,
            upgradeLevel: 0,
            autoClickPower: 500,
            image: 'images/organic-farm.png',
        },
        {
            name: 'Genetically Modified Limes',
            basePrice: 128000,
            currentPrice: 128000,
            baseUpgradePrice: 450000,
            upgradePrice: 450000,
            level: 0,
            upgradeLevel: 0,
            autoClickPower: 7000,
            image: 'images/lime.png',
        },
        {
            name: 'Factory',
            basePrice: 1340000,
            currentPrice: 1340000,
            baseUpgradePrice: 5000000,
            upgradePrice: 5000000,
            level: 0,
            upgradeLevel: 0,
            autoClickPower: 35000,
            image: 'images/lime.png',
        },
        {
            name: 'Lord Harold',
            basePrice: 10000000,
            currentPrice: 10000000,
            baseUpgradePrice: 100000000,
            upgradePrice: 100000000,
            level: 0,
            upgradeLevel: 0,
            autoClickPower: 200000,
            image: 'images/lord-harold.png',
        }
    ],
    version: 1.0,
};