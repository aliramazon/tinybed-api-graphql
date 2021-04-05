import express from "express";
import { listings } from "./listings";
const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json({ limit: "10kb" }));

app.get("/", (_req, res) => res.send("GQL Backend 👍"));

app.get("/listings", (_req, res) => res.send(listings));

app.listen(PORT, () => console.log(`App is running on ${PORT} 👍`));
