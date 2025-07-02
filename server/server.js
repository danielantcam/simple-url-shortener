import "./config.js";
import express from "express";
import cors from "cors";
import { db } from "./db.js";
import { generateSlug } from "./utils.js";

const app = express();

/* Middlewares */
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

/* Endpoint that shortens a link */
app.post("/shorten", async (req, res)=>{
    const { link } = req.body;

    if(!link) return res.status(400).json({ error: "Bad request: no link provided." });

    try{
        new URL(link);
    }catch{
        return res.status(400).json({ error: "Bad request: link not valid." });
    }

    try{
        const [{insertId}] = await db.query(
            `INSERT INTO links (link) VALUES(?)`,
            [link]
        );

        const slug = generateSlug(insertId, link);

        await db.query(
            `UPDATE links
            SET slug = ?
            WHERE id = ?`,
            [slug, insertId]
        );

        return res.status(201).json({ shortenedLink: process.env.DOMAIN + slug });
    }catch(error){
        console.error(error);
        return res.status(500).json({ error: "Internal server error." });
    }
});


app.get("/:slug", async (req, res)=>{
    const { slug } = req.params;

    try{
        const [ rows ] = await db.query(
            `SELECT link FROM links
            WHERE slug = ?`,
            [slug]
        );

        const link = rows[0].link;

        return res.redirect(301, link);
    }catch(error){
        console.error(error);
        return res.status(500).json({ error: "Internal server error." });
    }
});


app.listen(process.env.PORT || "3000", ()=>{
    console.log(`Server listening on port ${process.env.PORT}...`);
});