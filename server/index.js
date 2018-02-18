
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
// const ac = require('./controllers/auth_controller');
const cors = require('cors');
const session = require('express-session');
// const { createInitialSession } = require('./controllers/middlewares/session');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// massive(process.env.CONNECTION_STRING).then(dbInstance => {
//     app.set('db', dbInstance);
// })

// app.use(session({
//     secret: "tyler",
//     resave: false,
//     saveUnitialized: true,
//     cookie: {
//         age: 10000
//     }
// }))
// app.use(createInitialSession);


// app.get('/api/bin/:id', bc.getBin)
// app.put('/api/bin/:id', bc.updateBinObj)
// app.delete('/api/bin/:id', bc.deleteBinObj)
// app.post('/api/bin/:id', bc.createBinObj)
 
const port = 6000;
app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});