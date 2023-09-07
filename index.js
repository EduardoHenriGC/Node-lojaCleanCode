import express from "express"
import product from "./routes/productroute.js"
import search from "./routes/search.js"
import favorites from "./routes/favorites.js"


import cors from "cors"


const app = express()

app.use(express.json())
app.use(cors())

app.use("/", product,search,favorites)

app.listen(8800) 