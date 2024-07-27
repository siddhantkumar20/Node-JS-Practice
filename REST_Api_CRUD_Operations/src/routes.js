const express = require('express');
const router = express.Router();
const db = require('./db');

// Create
router.post('/users', async (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const [result] = await db.query('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', [name, email, age]);
        res.status(201).json({ id: result.insertId, name, email, age });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Read
router.get('/users', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update
router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const [result] = await db.query('UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?', [name, email, age, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ id, name, email, age });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete
router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
