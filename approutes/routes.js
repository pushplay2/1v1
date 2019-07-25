/*Подключение серверных функция для каждого маршрута*/
import * as basiccontroller from '../controllers/General';

//Импортируем настройки сервера; 
let config = require('../config');

//Остальные модули
import fs from 'fs';
import path from 'path';

//Фабрика для роутов
module.exports = function(app) {

    //
    app.get('/', async function(req, res) { basiccontroller.TestRoute(req, res) });
};