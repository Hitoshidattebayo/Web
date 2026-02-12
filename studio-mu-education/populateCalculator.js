import { defineCliConfig } from 'sanity/cli'
import { createClient } from '@sanity/client'
import { getCliClient } from 'sanity/cli'

const doc = {
    _id: 'calculatorConfig',
    _type: 'calculatorConfig',
    title: 'Main Pricing Configuration',
    courses: [
        {
            _key: 'regular_esl',
            name: 'Regular ESL',
            priceList: [
                { _key: 'w4', weeks: 4, price: 0 },
                { _key: 'w8', weeks: 8, price: 0 },
                { _key: 'w12', weeks: 12, price: 0 },
                { _key: 'w24', weeks: 24, price: 0 }
            ]
        },
        {
            _key: 'ielts',
            name: 'IELTS / TOEIC',
            priceList: [
                { _key: 'w4', weeks: 4, price: 0 },
                { _key: 'w8', weeks: 8, price: 0 },
                { _key: 'w12', weeks: 12, price: 0 },
                { _key: 'w24', weeks: 24, price: 0 }
            ]
        },
        {
            _key: 'business',
            name: 'Business English',
            priceList: [
                { _key: 'w4', weeks: 4, price: 0 },
                { _key: 'w8', weeks: 8, price: 0 },
                { _key: 'w12', weeks: 12, price: 0 },
                { _key: 'w24', weeks: 24, price: 0 }
            ]
        },
        {
            _key: 'working_holiday',
            name: 'Working Holiday',
            priceList: [
                { _key: 'w4', weeks: 4, price: 0 },
                { _key: 'w8', weeks: 8, price: 0 },
                { _key: 'w12', weeks: 12, price: 0 },
                { _key: 'w24', weeks: 24, price: 0 }
            ]
        },
        {
            _key: 'family_junior',
            name: 'Family & Junior',
            priceList: [
                { _key: 'w4', weeks: 4, price: 0 },
                { _key: 'w8', weeks: 8, price: 0 },
                { _key: 'w12', weeks: 12, price: 0 },
                { _key: 'w24', weeks: 24, price: 0 }
            ]
        }
    ],
    dormitories: [
        {
            _key: '1bed',
            name: '1-bed',
            label: '1 хүний өрөө',
            priceList: [
                { _key: 'w4', weeks: 4, price: 0 },
                { _key: 'w8', weeks: 8, price: 0 },
                { _key: 'w12', weeks: 12, price: 0 },
                { _key: 'w24', weeks: 24, price: 0 }
            ]
        },
        {
            _key: '2bed',
            name: '2-bed',
            label: '2 хүний өрөө',
            priceList: [
                { _key: 'w4', weeks: 4, price: 0 },
                { _key: 'w8', weeks: 8, price: 0 },
                { _key: 'w12', weeks: 12, price: 0 },
                { _key: 'w24', weeks: 24, price: 0 }
            ]
        },
        {
            _key: '3bed',
            name: '3-bed',
            label: '3 хүний өрөө',
            priceList: [
                { _key: 'w4', weeks: 4, price: 0 },
                { _key: 'w8', weeks: 8, price: 0 },
                { _key: 'w12', weeks: 12, price: 0 },
                { _key: 'w24', weeks: 24, price: 0 }
            ]
        },
        {
            _key: '4bed',
            name: '4-bed',
            label: '4 хүний өрөө',
            priceList: [
                { _key: 'w4', weeks: 4, price: 0 },
                { _key: 'w8', weeks: 8, price: 0 },
                { _key: 'w12', weeks: 12, price: 0 },
                { _key: 'w24', weeks: 24, price: 0 }
            ]
        }
    ]
}

const client = getCliClient()

client.createOrReplace(doc).then((res) => {
    console.log(`Calculator configuration created/updated. Document ID: ${res._id}`)
}).catch((err) => {
    console.error('Migration failed: ', err.message)
})
