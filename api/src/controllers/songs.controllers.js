export const getAllSongs = async (req, res) => {
  let connection = req.dbConnection;

  try {
    const [rows] = await connection.query(`
      SELECT songs.id, songs.titulo, songs.letra 
      FROM songs
    `);

    res.json(rows);
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
}

export const createNewSong = async (req, res) => {
  const {
    titulo,
    letra
  } = req.body;

  const connection = req.dbConnection;

  const [result] = await connection.query(`
    SELECT titulo FROM songs WHERE titulo = ?
  `, [titulo]);

  if (result.length === 1) return res.status(302).json({
    message: 'Ese libro ya se encuentra agregado'
  });

  try {
    const [result] = await connection.query(`
      INSERT INTO songs (titulo, letra)
      VALUES (?, ?)
    `, [titulo, letra]);

    res.json({
      message:'Canción agregada con exito'
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error
    })
  }
}

export const deleteSong = async (req, res) => {
  const { id } = req.params;
  let connection = req.dbConnection;

  try {
    const [result] = await connection.query(`
      DELETE FROM songs WHERE id = ?
    `, [id]);

    if (result.affectedRows === 0) return res.status(404).json({
      error: 'Canción no encontrado'
    })

    res.json({
      message: 'Canción borrada con exito',
      result
    })
  } catch (error) {
    res.status(500).json({
      error: 'Error en el servidor'
    })
  }
}