import express from "express";
import fetch from "node-fetch";


const app = express();
app.use(express.json());
const TMDB_KEY = "my_tmdb_key";

app.get("/search", async (req, res) => {
    try{
        const movie = req.query.movie;
        const movieApi = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${TMDB_KEY}&query=${movie}`);
        const data = await movieApi.json();
        return res.status(200).json({success: true, message: data});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error."});
    }
});


app.listen(8080, () => {
    console.log("Server is listening...");
});