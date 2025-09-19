import express from "express";
import axios from "axios";
import dotenv from "dotenv";


const app = express();
app.use(express.json());
dotenv.config();
// const TMDB_KEY = process.env.TMDB_KEY;

app.get("/search", async (req, res) => {
    try{
        const movie = req.query.movie;
        const movieApi = await axios.get("https://api.themoviedb.org/3/search/multi",{
            params: {
                api_key: process.env.TMDB_KEY,
                query: movie
            }
        }
        );
        return res.status(200).json({success: true, message: movieApi.data});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error."});
    }
});


app.listen(8080, () => {
    console.log("Server is listening...");
});