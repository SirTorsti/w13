import express, {Express} from 'express'
import path from "path"
import morgan from "morgan"
import mongoose, {Connection} from 'mongoose'
import dotenv from 'dotenv'
import cors, {CorsOptions} from 'cors'

dotenv.config()

const app: Express = express()
const port: number = 3000

const mongoDB: string = "mongodb://localhost:27017/test"
mongoose.connect(mongoDB)
mongoose.Promise = Promise
const db: Connection = mongoose.connection

db.on('error', console.error.bind(console, "MongoDB connection error"))

db.createCollection("Books", {

})

const corsOptions: CorsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, "../public")))
//app.use("/", router)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})