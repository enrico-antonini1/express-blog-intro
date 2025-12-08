import express from "express"
import { post } from "./data.js"

const app = express();
const port = 3000;

app.use (express.static("public"));

// app.listen(port, () => {
//     console.log(`ciao ${port}`)
// })

app.get("/", (req, res) => {
    res.json("Server del mio blog")
})

app.get("/bacheca", (req, res) => {
    const titolo = req.query.titolo;
    const contenuto = req.query.contenuto;
    const immagine = req.query.immagine;
    const tags = req.query.tags;

    const risposta = {
        messaggio: `ciao ${titolo} e ${contenuto}`
    };
    res.json(risposta)
})