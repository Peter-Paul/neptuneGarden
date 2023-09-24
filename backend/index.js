const express = require("express")
const cors = require("cors")
const cookieParser=require("cookie-parser")
const { port } =  require("./constants.js")
const stakeRoutes = require("./routes/stake.js")

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors())
app.use(cors({
    origin:["*"],
    credentials:true,
    methods:['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
    exposedHeaders:['Content-Length','Content-Type','Set-Cookie','Origin','Access-Control-Allow-Credentials','Access-Control-Allow-Origin' ]
}))

app.use('/backend/',stakeRoutes)


app.listen( port, () => console.log(`Node server running on port ${port}`)  )