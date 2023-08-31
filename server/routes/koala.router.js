const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool.js');

console.log('we are inside koala router');

// GET
koalaRouter.get('/', (req, res) => {
console.log('we are inside the get request')
    let queryText = 'SELECT * FROM koalas;'

    pool.query(queryText).then(
        (result) => {
            res.send(result.rows)

        }
    ).catch(
        (err) => {
            console.log(`Error making query ${queryText}`, err);
            res.sendStatus(500);
        }
    )
});

// POST
koalaRouter.post('/koalas', (req, res) => {
console.log('we are inside our post request')
    let newKoalas = req.body

    console.log("req.body:", req.body);

    const queryText = `
    INSERT INTO "koalas" (id, name, gender, age, ready_to_transfer, notes)
    VALUES ('${newKoalas.id}', '${newKoalas.name}', '${newKoalas.gender}', '${newKoalas.age}', '${newKoalas.ready_to_transfer}', '${newKoalas.notes}')
    `
    console.log('The query we are sending to postgres', queryText);

    pool.query(queryText)
        .then(
            (result) => {
                res.sendStatus(200)
            }
        ).catch(
            (err) => {
                console.log(`Error making query ${queryText}`, err);
                res.sendStatus(500);
            }
        )
})

// PUT


// DELETE

module.exports = koalaRouter;






// id	name	gender	age	ready_to_transer	notes
// 1	Scotty	M	4	Y	Born in Guatemala
// 2	Jean	F	5	Y	Allergic to lots of lava
// 3	Ororo	F	7	N	Loves listening to Paula (Abdul)
// 4	Logan	M	15	N	Loves the sauna
// 5	Charlie	M	9	Y	Favorite band is Nirvana
// 6	Betsy	F	4	Y	Has a pet iguana