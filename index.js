import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://rickandmortyapi.com";

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/", async (req, res) => {
    const random = Math.floor(Math.random()*826);
    try {
      const result = await axios.get(API_URL + "/api/character/"+random);
      res.render("index.ejs", { name: result.data.name,image: result.data.image });
    } catch (error) {
      console.log(error);
      res.status(500);  }}); 
    
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });