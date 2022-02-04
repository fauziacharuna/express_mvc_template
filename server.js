const express = require('express');
const app = express()
const port = 40000
//import router
const indexRouter = require('./routers/indexRouter')
const userRouter = require('./routers/userRouter')

app.set("view engine", "ejs");
app.use("/", indexRouter )
app.use('/users', userRouter)

app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
})