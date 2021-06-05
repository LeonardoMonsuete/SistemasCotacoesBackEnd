import express from 'express';
import bodyParser from 'body-parser';

import produtosRoutes from './routes/produtos.js'
import usuariosRoutes from './routes/usuarios.js'
import fornecedoresRoutes from './routes/fornecedores.js'
import cotacoesRoutes from './routes/cotacoes.js'

const app = express();

app.use(bodyParser.json())

app.use('/produtos', produtosRoutes)
app.use('/usuarios', usuariosRoutes)
app.use('/fornecedores', fornecedoresRoutes)
app.use('/cotacoes', cotacoesRoutes)

app.get('/', (req,res) => res.send({json: 'teste'}))

if(process.env.PORT) {
    app.listen(process.env.PORT)
} else {
    app.listen(3000, function(){
        console.log(`Express server listening on port 3000`);
    });
}
