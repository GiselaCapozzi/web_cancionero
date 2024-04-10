import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import { PORT } from './src/config.js';

import { router as SongsRoutes } from './src/routes/songs.routes.js';

dotenv.config()

const app = express();

app.set('port', PORT);

app.use(express.json());

app.use(morgan('dev'));

app.use(cors({
  'methods': ['GET','POST', 'PUT', 'DELETE'],
  'origin': ['https://cancionero-lapaz.netlify.app/', 'http://localhost:5173']
}));

app.use('/songs', SongsRoutes);

app.get('/', (req, res) => {
  res.send('Hola');
})

app.listen(app.get('port'), () => {
  console.log(`Listening on port http://localhost:${app.get('port')}`)
})