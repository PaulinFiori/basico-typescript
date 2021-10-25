import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(routes);
app.use(cors());

app.listen(port, () => console.log(`Example app listening on port port!`));