import express from "express";
import path from "path";
import "./db";
import { localMiddleware } from "./middleware";

import movieRouter from "./movieRouter";

const app = express();
const PORT = 4000;
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(localMiddleware);

app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(PORT, () => console.log(`✅  Server Ready!`));
