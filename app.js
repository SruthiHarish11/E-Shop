const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;
const productsRouter = require('./routes/products');
const categoryRouter = require('./routes/categories');
//middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(`${api}/products`,productsRouter);
app.use(`${api}/categories`,categoryRouter);





mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log('Database connected');
}).catch((err)=>{
    console.log(err);
});

// admin1234
// eshop_admin


app.listen(3000,()=>{
    console.log(api+'/products');
    console.log('Listening at 3000');
});