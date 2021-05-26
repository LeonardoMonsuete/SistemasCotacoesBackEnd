import express from 'express';
import bodyParser from 'body-parser';

import produtosRoutes from './routes/produtos.js'
import usuariosRoutes from './routes/usuarios.js'
import fornecedoresRoutes from './routes/fornecedores.js'

const app = express();
const PORT = 3000;

app.use(bodyParser.json())

app.use('/produtos', produtosRoutes)
app.use('/usuarios', usuariosRoutes)
app.use('/fornecedores', fornecedoresRoutes)

app.get('/', (req,res) => res.send({json: 'teste'}))

app.listen(PORT, () => console.log(`Servidor rodando na porta: http://localhost:${PORT}`))