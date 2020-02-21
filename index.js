const express = require('express')
const app = express()
const port = 3000
test = false

app.get('/attempt', (req,res)=>{
    if(test){
        res.send('Door Unlocked')
    }
    else{
        res.send('Door Locked')
    }
})

app.get('/lever', (req,res)=>{
    test = !test
    res.send('Click')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))