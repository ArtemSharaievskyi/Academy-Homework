const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { pool } = require('../db.js');


const registerUser = async (req, res) => {
    const { username, password } = req.body;
    const hashed = await bcryptjs.hash(password, 12);

    try {
        const userExists = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (userExists.rows.length > 0) return res.status(400).json({ message: 'Username already exists' });

        const newUser = await pool.query
            ('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, hashed]);

        const token = jwt.sign({ id: newUser.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '3h' });
        const userData = { ...newUser.rows[0] }
        delete userData.password;

        return res.status(201).json({ token, user: userData });

    }
    catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
}

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (!user.rows.length) return res.status(400).send({ message: 'Invalid credentials' });

        const valid = await bcryptjs.compare(password, user.rows[0].password);
        if (!valid) return res.status(400).send({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '3h' });
        const userData = { ...user.rows[0] }
        delete userData.password;

        return res.status(201).json({ token, user: userData });
    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
}


module.exports = { registerUser, loginUser };