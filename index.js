let express = require('express')
let db = require('./db/user')
let app = express()
let port = 3001
app.get ('/',(req,res)=>{
    res.send('<h1>hello word</h1>')
});
app.get('/adress',async(req,res) =>{
const result = await db.getAll(req.body)
});
app.listen(port, () => {
console.log('app running on port',port)
})