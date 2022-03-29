const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
res.send('Hola desde Expres');
});

app.listen(PORT, (req, res)=>{
    console.log('Servidor Activo')
})

module.exports = app