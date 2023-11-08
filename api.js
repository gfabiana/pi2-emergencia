const express = require('express');
const app = express();
const port = 5432;
const pgp = require('pg-promise')();

// Configuração de conexão com o PostgreSQL
const db = pgp({
  host: // Substitua pelo host do PostgreSQL
  port: // Substitua pela porta do PostgreSQL
  database: // Nome do seu banco de dados PostgreSQL
  user: // Nome de usuário do PostgreSQL
  password:  // Senha do PostgreSQL
});

// Endpoint para buscar dados dos postos de saúde
app.get('/api/postos-de-saude', async (req, res) => {
  try {
    // Consulta SQL para buscar os postos de saúde
    const postosDeSaude = await db.any('SELECT * FROM postos_de_saude');

    res.json(postosDeSaude);
  } catch (error) {
    console.error('Erro ao buscar os postos de saúde:', error);
    res.status(500).json({ error: 'Erro ao buscar os postos de saúde' });
  }
});

app.listen(port, () => {
  console.log(`Servidor da API está rodando em http://localhost:5432`);
});
