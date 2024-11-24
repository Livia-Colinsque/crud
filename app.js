const express = require('express');
const App =express();

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
 

const express = require('express');
const bodyParser = require ('body-parser');
const userControlers = require('./Controlers/userControlers');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded{{extended: false}});

app.get('/', userController.getAllUsers);

app.get('/edit/:id', userControlers.getUserById);
app.get("/edit/:id", userControlers.updateUser);
app.get('/add', (req, res) => res.render('add'));
app.post('/add', userControlers.addUser);

app.listen(3000 , () => {
    console.log('Server rodando na porta 3000');
});
