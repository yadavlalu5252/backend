require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello India!')
})

app.get('/twitter', (req, res) => {
    res.send('yadavlalu5252')
})
app.get('/login', (req, res) => {
    res.send('<h1>You are login to youtube as yadavlalu5252</h1>')
})
app.get('/instagram', (req, res) => {
    res.send('<h1>You are login to intagram as yadavlalu5252</h1>')
})

app.listen(process.env.PORT, () =>{
    console.log(`Example app listening on ${port}`)
})