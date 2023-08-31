const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool.js');


// GET
// router.get('/', (req, res) => {

//     let queryText = 'SELECT * FROM koalas;'

//     pool.query(queryText).then(
//         (result) => {
//             res.send(result.rows)

//         }
//     ).catch(
//         (err) => {
//             console.log(`Error making query ${queryText}`, err);
//             res.sendStatus(500);
//         }
//     )
// });

// POST
// router.post('/koalas', (req, res) => {

//     let newKoalas = req.body

//     console.log("rs.body:", req.body);

//     const queryText = `
//     INSERT INTO "koalas" (id, name, gender, age, ready_to_transfer, notes)
//     VALUES ('${newKoalas.id}', '${newKoalas.name}', '${newKoalas.gender}', '${newKoalas.age}', '${newKoalas.ready_to_transfer}', '${newKoalas.notes}')
//     `
//     console.log('The query we are sending to postgres', queryText);

//     pool.query(queryText)
//         .then(
//             (result) => {
//                 res.sendStatus(200)
//             }
//         ).catch(
//             (err) => {
//                 console.log(`Error making query ${queryText}`, err);
//                 res.sendStatus(500);
//             }
//         )
// })

// PUT


// DELETE

module.exports = koalaRouter;