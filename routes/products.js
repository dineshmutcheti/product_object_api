const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/total-value', (req, res) => {
    
    const sqlQuery = 'SELECT price, quantity FROM products';

    db.query(sqlQuery, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }

        // Calculate the total value
        const totalValue = results.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0);

        res.json({ totalValue });
    });
});

router.post('/add', (req, res) => {
    const { name, price, quantity } = req.body;

    if (!name || price == null || quantity == null) {
        return res.status(400).json({ error: 'Please provide name, price, and quantity' });
    }

    
    const sqlInsert = 'INSERT INTO products (name, price, quantity) VALUES (?, ?, ?)';
    db.query(sqlInsert, [name, price, quantity], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database insertion failed' });
        }

        res.json({ message: 'Product added successfully', productId: result.insertId });
    });
});

module.exports = router;
