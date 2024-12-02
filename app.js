const express = require('express');
const App =express();

const express = require('express');
const bodyParser = require('body-parser');
const userControlers = require('./Controlers/userControlers');
const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', userControlers.getAllUsers);


app.get('/edit/:id', userControlers.getUserById);
app.post('/edit/:id', userControlers.updateUser); 

app.get('/add', (req, res) => res.render('add'));
app.post('/add', userControlers.addUser);


app.get('/dell/:id', userControlers.getdeleteByUser); 
app.post('/dell/:id', userControlers.deleteUser); 


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});