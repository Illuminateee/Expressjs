const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());

app.get('/biodata',(req,res)=>{
    const name = req.query.name;
    const tempat = req.query.tempat;
    const tanggal = req.query.tanggal;
    const alamat = req.query.alamat;

    res.send({
        'name' : name,
        'tempat-lahir': tempat,
        'tanggal-lahir' : tanggal,
        'alamat' : alamat

    });

});

app.listen(port);
console.log('Server started at http://localhost:' + port);