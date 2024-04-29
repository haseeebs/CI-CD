require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

// main().catch(err => console.log(err));

mongoose.connect(`${process.env.MONGODB_URL}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDb connected sucessfully...'))
    .catch(err => console.log(err));

app.listen(3000, () => console.log('Server running on port 3000'));