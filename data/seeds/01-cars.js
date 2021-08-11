// STRETCH
const cars = [
    {
        vin: '1FMEU7DE5AUA72472', 
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: 'JH4DA1750HS018437', 
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: 'WBSPM9C52BE202514', 
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    },
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//       return knex('cars').insert(cars)
//     })
// }

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}