const express = require('express');
const joi = require('joi');
const router = require('./Routes/genre');
const app = express();

app.use(express.json());
app.use('/api/genres', router);


const port = process.env.PORT || 8080; 
app.listen(port, () => {
   console.log(`Listening on port ${port}!!`); 
});


