let express=require('express')
let fs=require('fs')
let app=express()
let axios=require('axios')
app.use('/ok',express.static('./ppp'))

app.get('/min/g',function (req,res) {

    res.send('8099~')
})
app.listen(8099)

