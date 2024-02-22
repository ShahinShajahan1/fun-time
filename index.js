import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views"); 

app.get("/",async (req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single");
        res.render("index", { content: result.data.joke });
        } 
    catch (error) {
        res.render("index", { content: "An error occurred while fetching the joke." });
    }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

