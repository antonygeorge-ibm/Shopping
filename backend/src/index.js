const express = require('express')
//require('./db/mongoose')
// const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')

const app = express()
const port =5000

// app.use(userRouter)
// app.use(taskRouter)
app.get('/data',(req,res) => {
    const customers=[
        {id:1 , firstname: 'john' , lastName: 'Doe'},
        {id:2 , firstname: 'steve' , lastName: 'aoe'},
        {id:3 , firstname: 'jay' , lastName: 'foe'}
    ];
    res.json(customers);
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})