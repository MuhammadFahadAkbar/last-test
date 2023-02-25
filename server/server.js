const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const formRoutes = require("./routes/forms");
const sectorRoutes = require("./routes/sectors");
const {MONGO_URI} = require("./config/keys");
const http = require('http');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

mongoose
  .connect('mongodb+srv://fahad:testdb123@testdb.8jfqnvu.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {

  http.createServer(app).listen(process.env.PORT, async ()=>{
    
    if(process.env.NODE_ENV=='production'){
      const path = require('path')

    app.get('/', (req, res) => {
      const clientBuildPath = path.join(__dirname, '..', 'client', 'build');
      app.use(express.static(clientBuildPath));
      res.sendFile(path.join(clientBuildPath, 'index.html'));
    })
    }
      console.log(`Database Connected and Server is running on port: ${port}`);
    }); 
      
  })
  .catch((err) => console.log(err));

app.use("/forms", formRoutes);
app.use("/sectors", sectorRoutes);
