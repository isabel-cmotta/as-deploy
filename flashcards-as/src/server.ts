const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos (como index.html)
app.use(express.static('src'));

/*app.get('/', (req, res) => {
    res.send('hello world');
});*/

app.listen(PORT, '0.0.0.0',  () => {
    console.log(`Servidor Node.js rodando na porta ${PORT}`);
});

// tsc C:path/server.ts

// node server.ts

//npx ts-node src/server.ts
// http://localhost:3000/