import 'dotenv/config';
import './src/config/db.js';
import app from './src/index.js';

app.listen(3000, () => {
  console.log('Servidor rodando...')
})