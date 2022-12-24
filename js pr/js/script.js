let arr = [
    {
        id: 1,
        name: 'AZIZs_KABLUK',
        budget: 500000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'design',
                total: 60000
            },
            {
                for: 'material',
                total: 70000
            },
            {
                for: 'place',
                total: 120000
            },
        ]
    },
    {
        id: 2,
        name: 'KAMERON_CINEMA',
        budget: 600000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'camera',
                total: 90000
            },
            {
                for: 'actors',
                total: 140000
            },
            {
                for: 'electricity',
                total: 50000
            },
        ]
    },
    {
        id: 3,
        name: 'ISKANDARs_ZOO',
        budget: 450000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'animals',
                total: 100000
            },
            {
                for: 'cloune',
                total: 15000
            },
            {
                for: 'food',
                total: 70000
            },
        ]
    },
    {
        id: 4,
        name: 'AMINs_SOOOO',
        budget: 800000,
        tax: 12,
        expensesPerYear: [
            {
                for: 'house',
                total: 200000
            },
            {
                for: 'cars',
                total: 150000
            },
            {
                for: 'family',
                total: 300000
            },
        ]
    },
]


let totalYear = arr[0].expensesPerYear[0].total + arr[0].expensesPerYear[1].total + arr[0].expensesPerYear[2].total 

let totalYear2 = arr[1].expensesPerYear[0].total + arr[1].expensesPerYear[1].total + arr[1].expensesPerYear[2].total 

let totalYear3 = arr[2].expensesPerYear[0].total + arr[2].expensesPerYear[1].total + arr[2].expensesPerYear[2].total 

let totalYear4 = arr[3].expensesPerYear[0].total + arr[3].expensesPerYear[1].total + arr[3].expensesPerYear[2].total 

let taxYear = arr[0].budget/ 100 * arr[0].tax
let taxYear2 = arr[1].budget/ 100 * arr[1].tax
let taxYear3 = arr[2].budget/ 100 * arr[2].tax
let taxYear4 = arr[3].budget/ 100 * arr[3].tax

alert ('Each company expances is' + ' ' + totalYear + ', ' + totalYear2 + ', ' + totalYear3 + ', ' + totalYear4)
alert (`Each company taxes per year are ${taxYear}, ${taxYear2}, ${taxYear3}, ${taxYear4}`)






