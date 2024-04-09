import { createPool } from 'mysql2/promise';
import {
  DATABASE,
  DB_HOST,
  DB_PORT,
  PASSWORD,
  USER
} from '../config.js';
import dotenv from 'dotenv';

dotenv.config();

const db = createPool({
  host: 'localhost',
  user: 'root',
  password: 'Far8519ganjulio06%',
  database: 'cancionerodb',
  port: 3306,
  connectionLimit: 10
});

export const withDBConnection = async (req, res, next) => {
  let connection;

  try {
    connection = await db.getConnection();
    req.dbConnection = connection;
    console.log('Conectado');
    next();
  } catch (error) {
    console.error(`Error connecting to MySQL: ${error}`);
    res.status(500).send('Internal Server Error');
  } finally {
    console.log('Salida');
    if (connection) {
      connection.release();
    }
  }
}