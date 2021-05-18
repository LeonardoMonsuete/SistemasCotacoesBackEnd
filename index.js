import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Servidor rodando na porta: http://localhost:${PORT}`))