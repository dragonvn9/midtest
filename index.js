import express from 'express';
import morgan from 'morgan';

const app = express();
import authRoute from './routers/authRoute.js'
import authInfo from './routers/infoRoute.js'
import mongoose from 'mongoose';
import authMiddleware from './authMiddleware/authMiddleware.js'
import workProcessRouter from './routers/workProcessRouter.js'
import infoPlusRouter from './routers/infoPlusRouter.js'

mongoose.connect('mongodb+srv://vndragon:thai900U@cluster0.ybccu.mongodb.net/midtest', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));


app.use(express.json());
// Sử dụng Morgan 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// định nghĩa route 
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/info", authMiddleware.authentication, authInfo)
app.use("/api/v1/work-process", authMiddleware.authentication, workProcessRouter)
app.use("/api/v1/info-plus", authMiddleware.authentication, infoPlusRouter)

app.listen(8080, () => {
    console.log('Server is running!');
});

