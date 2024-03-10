import express from "express";
import userData from "./model/model.js"
import db from "./db/db.js";
const app = express();
import indexRouter from "./routes/index.js"
import bodyParser from "body-parser";

const hostName = "localhost"
const port = 3000

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use("/", indexRouter)

app.listen(port, hostName, () => {
    console.log(`server start at port http://${hostName}:${port}`);
})

