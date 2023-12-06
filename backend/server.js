const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routers/taskRouter')
const app = express()
const port = 3000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

app.get('', (req,res)=>{
    res.send('Hello your are from backend!')
})

const connectionDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/crud');
        console.log('DB is Connected!');
    } catch (error) {
        res.status(500)
        console.log(`error: ${error.message}`);
    }
}


app.listen(port, () =>{
    connectionDB()
    console.log('Server is Running');
})
