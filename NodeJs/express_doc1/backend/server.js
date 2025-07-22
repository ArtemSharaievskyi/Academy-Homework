const express = require('express');

const cors = require('cors');
const dotenv = require('dotenv');

const postRoutes = require('./routes/posts.js');
const authRoutes = require('./routes/auth.js');
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/posts', postRoutes)
app.use('/api/auth', authRoutes)


app.get('/', (req, res) => {
    res.send('Welcome to the server!');
})


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})