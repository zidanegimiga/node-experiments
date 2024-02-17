import express from "express";
import dbConnect from "./configs/dbConnect";
import dotenv from "dotenv";

dotenv.config()

const app = express();

app.use(express.json)

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log("App is running on port ", PORT);
    dbConnect();
});

export default app;