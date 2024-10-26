const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');
const productRoutes = require('./routes/products');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
