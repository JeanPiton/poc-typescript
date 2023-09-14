import express,{json} from "express"
import "express-async-errors"
import dotenv from "dotenv"
import cors from "cors"
import router from "@/routes/index.routes"
dotenv.config()

const server = express()

server.use(cors())
server.use(json())
server.use(router)

const port = process.env.PORT || 5000
server.listen(port,()=>{console.log(`Server running at http://localhost:${port}`)})
