const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000;
const mainRouter = require('./routes/index')

app.use(cors())
app.use(express.json())

//Routes -----------------
app.use('/api/v1', mainRouter)

app.listen(port, () => {
    console.log(`Server is running on http ${port}`)
})