const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(cookieParser());
const { connect } = require('./config/db.connection')
app.use(express.json())



app.use('/api/v1', require('./routes/routes'))









const port = process.env.PORT || 3600
connect()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server Running here 👉${port}/`);
        });
    })
    .catch((err) => {
        console.log(`Server running failed`);
    });