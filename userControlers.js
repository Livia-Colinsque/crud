exports.getApp = (req, res) => {
    res.render('index', {
        title: 'Página Inicial'
    });
};

const User = require('../Models/usersModel');

exports.getAllUsers = (req, res) => {

    User.getAllUsers((users) => {

        res.render('index' , (users));
    });
}

exports.getUserById = (req, res) =>{
    const userId = req.params.id;
    User.getUserById(userId, (user)  => {
        res.render('edit', (user));
    });
};

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updateUser = {
        name: req.body.name,
        email: req.body.email
    };

    User.updateUser(userId, updateUser, () =>    {
        res.redirect('/');
    });
};

exports.addUser = (req, res) => {

    const newUser = {
        name: req.body.name,
        email: req.body.name,
    };
    User.addUser(newUser, () => {
        res.redirect('/');
    });
};