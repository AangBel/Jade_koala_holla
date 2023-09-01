const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool.js');

console.log('we are inside koala router');

// GET
koalaRouter.get('/', (req, res) => {
console.log('we are inside the get request')
    let queryText = 'SELECT * FROM "koalas";'

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

koalaRouter.post('/', (req, res) => {
    // Do this with a DB instead

    let newKoalas = req.body

    console.log("res.body:", req.body);

    const queryText = `
    INSERT INTO koalas (name, gender, age, ready_to_transfer, notes)
    VALUES ($1, $2, $3, $4, $5)
    `

    console.log('The query we\'re sending to postgres:', queryText);

    // Then, find a way to pass it to our pool (aka, the connection to the db).
    // Then it's pg's problem

    pool.query(queryText, [newKoalas.name, newKoalas.gender, newKoalas.age,newKoalas.ready_to_transfer, newKoalas.notes])
        .then(
            (result) => {
                res.sendStatus(200);
            }
        ).catch(
            (err) => {
                console.log(`Error making query ${queryText}`, err);
                res.sendStatus(500);
            }
        )

});

// PUT


// DELETE



module.exports = koalaRouter;