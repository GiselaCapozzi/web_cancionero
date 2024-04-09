import { Router } from 'express';
import {
  getAllSongs,
  createNewSong,
  deleteSong
} from '../controllers/songs.controllers.js';
import { withDBConnection } from '../database/database.js';

export const router = Router();

router.get('/', withDBConnection, getAllSongs);
router.post('/', withDBConnection, createNewSong);
router.delete('/:id', withDBConnection, deleteSong);