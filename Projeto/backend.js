const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // ou a porta que você deseja usar

// Configurações do banco de dados
const db = mysql.createConnection({
    host: 'seu_servidor_mysql',
    user: 'seu_usuario_mysql',
    password: 'sua_senha_mysql',
    database: 'seu_banco_de_dados'
});

// Conectar ao banco de dados
db.connect(err => {
    if (err) {
        console.error('Erro na conexão com o banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Middleware para analisar o corpo da solicitação como JSON
app.use(bodyParser.json());

// Rota para receber dados da calculadora e inserir no banco de dados
app.post('/api/calculator', (req, res) => {
    const data = req.body;

    // Inserir os dados no banco de dados
    const sql = 'INSERT INTO OperacoesCalculadora (Operando1, Operando2, Operacao, Resultado)';
    db.query(sql, [data.num1, data.num2, data.operation, data.result], (err, result) => {
        if (err) {
            console.error('Erro ao inserir operação no banco de dados:', err);
            res.status(500).send('Erro interno do servidor');
            return;
        }

        console.log('Operação inserida com sucesso no banco de dados');
        res.status(200).send('Operação inserida com sucesso no banco de dados');
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor backend rodando na porta ${port}`);
});
