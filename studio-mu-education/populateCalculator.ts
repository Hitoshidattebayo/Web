import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'j0hu0wdz', // Found in sanity.cli.ts or similar, assuming from previous context or generic
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: false,
    token: process.env.SANITY_TOKEN || '', // Will rely on 'sanity exec' providing the client config usually, or we use the local config
})

// Data from Calculator.jsx
const COURSE_PRICES = {
    'Regular ESL': { 1: 360, 2: 540, 3: 720, 4: 900, 5: 1125, 6: 1350, 7: 1575, 8: 1800, 12: 2700, 16: 3600, 20: 4500, 24: 5400 },
    'Power Intensive ESL': { 1: 440, 2: 660, 3: 880, 4: 1100, 5: 1375, 6: 1650, 7: 1925, 8: 2200, 12: 3300, 16: 4400, 20: 5500, 24: 6600 },
    'IELTS': { 1: 420, 2: 630, 3: 840, 4: 1050, 5: 1313, 6: 1575, 7: 1838, 8: 2100, 12: 3150, 16: 4200, 20: 5250, 24: 6300 },
    'TOEIC': { 1: 400, 2: 600, 3: 800, 4: 1000, 5: 1250, 6: 1500, 7: 1750, 8: 2000, 12: 3000, 16: 4000, 20: 5000, 24: 6000 },
    'BUSINESS': { 1: 420, 2: 630, 3: 840, 4: 1050, 5: 1313, 6: 1575, 7: 1838, 8: 2100, 12: 3150, 16: 4200, 20: 5250, 24: 6300 }
};

const DORM_PRICES = {
    'Twin': { 1: 440, 2: 660, 3: 880, 4: 1100, 5: 1375, 6: 1650, 7: 1925, 8: 2200 },
    'Standard Single': { 1: 700, 2: 900, 3: 1200, 4: 1500, 5: 1874, 6: 2250, 7: 2625, 8: 3000 },
    'Premium Single': { 1: 680, 2: 1020, 3: 1360, 4: 1700, 5: 2125, 6: 2550, 7: 2975, 8: 3400 }
};

const DORM_LABELS = {
    'Twin': '2 хүний өрөө',
    'Standard Single': 'Standard 1',
    'Premium Single': 'Premium 1'
};

const transformPrices = (pricesObj) => {
    return Object.entries(pricesObj).map(([weeks, price]) => ({
        weeks: parseInt(weeks),
        price: parseInt(price),
        _key: weeks
    }));
};

const doc = {
    _type: 'calculatorConfig',
    title: 'Main Pricing Configuration',
    courses: Object.entries(COURSE_PRICES).map(([name, prices], index) => ({
        name,
        priceList: transformPrices(prices),
        _key: name
    })),
    dormitories: Object.entries(DORM_PRICES).map(([name, prices], index) => ({
        name,
        label: DORM_LABELS[name] || name,
        priceList: transformPrices(prices),
        _key: name
    }))
};

// We use the Sanity CLI context to run this, so 'client' is passed or we can use the 'part:@sanity/base/client' if old,
// but for 'sanity exec' we can just export a function or run the script.
// Let's assume we run this with `sanity exec` which provides global `courser` context or similar?
// Actually simpler: just use the configured client if we are in the ecosystem.
// Or better: Use the dedicated 'sanity documents create' if possible? No, too complex structure.
// Let's rely on `sanity exec` injecting the client or being able to import configuration.

// For `sanity exec`, we can just do:
import { getCliClient } from 'sanity/cli'
const cliClient = getCliClient({ apiVersion: '2023-05-03' })

async function run() {
    console.log('Creating calculator configuration...');
    try {
        const res = await cliClient.createOrReplace({
            _id: 'calculator-config-main',
            ...doc
        });
        console.log('Document created:', res._id);
    } catch (err) {
        console.error('Error creating document:', err.message);
    }
}

run();
