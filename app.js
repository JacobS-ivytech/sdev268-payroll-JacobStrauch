const express = require("express")
const path = require("path")
const sqlite3 = require("sqlite3")

const db = new sqlite3.Database("ABC.db")


const app = express()

app.get('/', (req, res) => {
    res.send('./frontend/index.html')
})



app.listen(3000, () => {
    console.log('Server Running')
})