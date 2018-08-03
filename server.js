const express = require('express')

const bodyParser = require('body-parser')

const app = express() 

const axios = require('axios')


app.listen(3000, () => {console.log('Example listening on Port 3000')})

// app.get("/", (req, res) => {
//     res.send("THIS IS THE FUCKING RESULT");
// })

app.use(bodyParser.json())

const url = "http://178.128.146.146:8000/predict"

app.get("/api*", (req,res,next) => {
    let params = req.params;
    axios({
        method: 'get',
        url: url,
        data: {
            params
        }
    }).then((response) => {
        res.json(response)
    })
})


