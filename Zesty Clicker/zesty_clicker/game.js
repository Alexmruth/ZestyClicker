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
            value: true,
            type: 'switch'
        },
        {
            id: 'soundCB',
            label: 'Sound',
            value: false,
            type: 'switch'
        },
        {
            id: 'autosaveCB',
            label: 'Autosave',
            value: true,
            type: 'switch'
        },
    ],
    shop: [
        {
            currentPrice: 100,
            upgradePrice: 10000,
            clickPower: 1,
            level: 1,
            upgradeLevel: 0,
        },
        {
            currentPrice: 10,
            upgradePrice: 1000,
            level: 0,
            upgradeLevel: 0,
        },
        {
            currentPrice: 100,
            upgradePrice: 5000,
            level: 0,
            upgradeLevel: 0,
        },
        {
            currentPrice: 1000,
            upgradePrice: 18000,
            level: 0,
            upgradeLevel: 0,
        },
        {
            currentPrice: 15000,
            upgradePrice: 80000,
            level: 0,
            upgradeLevel: 0,
        },
        {
            currentPrice: 128000,
            upgradePrice: 450000,
            level: 0,
            upgradeLevel: 0,
        },
        {
            currentPrice: 1340000,
            upgradePrice: 5000000,
            level: 0,
            upgradeLevel: 0,
        },
        {
            currentPrice: 10000000,
            upgradePrice: 100000000,
            level: 0,
            upgradeLevel: 0,
        }
    ],
    version: 1.1,
};

var shopData = [
    {
        name: 'Clicking Power',
        basePrice: 100,
        baseUpgradePrice: 10000,
        tooltip: "Increases the power of each click to",
        image: 'images/cursor.png',
    },
    {
        name: 'Harold',
        basePrice: 1,
        baseUpgradePrice: 1000,
        autoClickPower: 0.1,
        image: 'images/harold.png',
        tooltip: "Increases auto click by",

    },
    {
        name: 'lime Tree',
        basePrice: 100,
        baseUpgradePrice: 5000,
        autoClickPower: 10,
        image: 'images/lime-tree.png',
        tooltip: "Increases auto click by",
    },
    {
        name: 'Greenhouse',
        basePrice: 1000,
        baseUpgradePrice: 18000,
        autoClickPower: 150,
        image: 'images/greenhouse.png',
        tooltip: "Increases auto click by",
    },
    {
        name: 'Organic Farm',
        basePrice: 15000,
        baseUpgradePrice: 80000,
        autoClickPower: 500,
        image: 'images/organic-farm.png',
        tooltip: "Increases auto click by",
    },
    {
        name: 'Genetically Modified Limes',
        basePrice: 128000,
        baseUpgradePrice: 450000,
        autoClickPower: 7000,
        image: 'images/lime.png',
        tooltip: "Increases auto click by",
    },
    {
        name: 'Factory',
        basePrice: 1340000,
        baseUpgradePrice: 5000000,
        autoClickPower: 35000,
        image: 'images/lime.png',
        tooltip: "Increases auto click by",
    },
    {
        name: 'Lord Harold',
        basePrice: 10000000,
        baseUpgradePrice: 100000000,
        autoClickPower: 200000,
        image: 'images/lord-harold.png',
        tooltip: "Increases auto click by",
    },
    {
        name: 'Item 9',
        basePrice: 350000000000,
        baseUpgradePrice: 3500000000000,
        autoClickPower: 5000000000,
        image: 'images/lime.png',
        tooltip: "Increases auto click by",
    },
    {
        name: 'Item 10',
        basePrice: 1000000000000,
        baseUpgradePrice: 8500000000000,
        autoClickPower: 9000000000,
        image: 'images/lime.png',
        tooltip: "Increases auto click by",
    }
];