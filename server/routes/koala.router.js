const express = require('express');
const koalaRouter = express.Router();
const pool = require('./pool');

// POST route to add a koala is here 
koalaRouter.post('/', (req, res) => {
    const { name, age, gender, readyForTransfer, notes } = req.body;
  
    const queryText = `
      INSERT INTO koalas (name, age, gender, ready_for_transfer, notes)
      VALUES ($1, $2, $3, $4, $5);
    `;
  
    pool.query(queryText, [name, age, gender, readyForTransfer, notes])
      .then((result) => {
        res.sendStatus(201); // Created
      })
      .catch((error) => {
        console.error('Error adding koala', error);
        res.sendStatus(500); // Internal Server Error
      });
  });
  
  // PUT route to mark a koala ready for transfer
  koalaRouter.put('/ready/:id', (req, res) => {
    const koalaId = req.params.id;
  
    const queryText = `
      UPDATE koalas
      SET ready_for_transfer = true
      WHERE id = $1;
    `;
  
    pool.query(queryText, [koalaId])
      .then((result) => {
        res.sendStatus(200); // OK
      })
      .catch((error) => {
        console.error('Error marking koala ready for transfer', error);
        res.sendStatus(500); // Internal Server Error
      });
  });

module.exports = koalaRouter;