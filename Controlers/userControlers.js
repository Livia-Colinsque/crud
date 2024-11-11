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