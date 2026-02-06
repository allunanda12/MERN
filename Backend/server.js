const express = require('express');
const app = express();
const todoRoute = require('./router/todoRouter');
const dotenv = require('dotenv');
const userRoute = require('./router/userRouter');
const connectDB = require('./config/db');
const cors = require("cors")
dotenv.config();

connectDB();
app.use(cors())
app.use(express.json());
app.use('/api/todo', todoRoute);
app.use('/api/users', userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});