const express = require("express");
const path = require("path");
const app = express();
//const port = 3000;

const temp_path = path.join(__dirname, "../template/views");
app.set('view engine', 'hbs');
app.set('views',temp_path);
require("./db/conn" );

// Increase the limit for the EventEmitter named 'Bus'-
//Bus.setMaxListeners(15); // Set the appropriate number according to your needs


const port = process.env.PORT || 3000; // Choose any port you prefer


// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, from Pratik,to create login page");
});
app.post('/',(req,res) =>{
  res.render('index')
})
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

