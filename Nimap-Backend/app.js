const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const Pool=require('./db.config');
const port=4000;

const category=require('./routes/categoryRoutes');
const product=require('./routes/product');

app.use('/api',category,product);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });