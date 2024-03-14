const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Nimap',
  password: 'password',
  port: 5432

});

pool.connect((err,client,release)=>{
  if(err){
    console.log("Error connecting to the database",err);
  }else{
    console.log("Database connected successfully");
  }
  release();
});

module.exports=pool