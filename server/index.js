const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
// const bc = require('./controllers/bin_controller')
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// massive(process.env.CONNECTION_STRING).then(dbInstance => {
//     app.set('db', dbInstance);
// })


// app.get('/api/bin/:id', bc.getBin)
// app.put('/api/bin/:id', bc.updateBinObj)
// app.delete('/api/bin/:id', bc.deleteBinObj)
// app.post('/api/bin/:id', bc.createBinObj)
 
const port = 6000;
app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});