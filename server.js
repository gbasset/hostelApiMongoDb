import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/routes.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
dotenv.config();
const PORT = 3000;
const app = express();
// morgan error support
app.use(morgan('dev'))
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));
// Support JSON-encoded bodies
app.use(bodyParser.json());
app.use(routes);
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).catch(error => console.log(error));

app.listen(PORT, console.log("Server is listening on port : ", PORT));