const express = require ('express'), 
    bodyParser = require('body-parser'),
    app = express();
    port = 3001;
    ctrl = require('./controllers/controllers.js')

app.use(bodyParser.json())

app.get('/api/travels',ctrl.get)
app.post('/api/travels',ctrl.post)
app.put('/api/travels/:id',ctrl.put)

app.listen(port,() => console.log(`Listening on port ${port}`));

