const express = require('express');
const app = express();

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

const port = 8080;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
