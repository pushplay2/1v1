'use strict'
/* Подключение серверных функция для каждого маршрута */
import * as basicController from '../controllers/general';

//Импортируем настройки сервера; 
import config from '../config/config.json';

// Остальные модули
import fs from 'fs';
import path from 'path';

// Фабрика для роутов
module.exports = function(app) 
{
    app.get('/', async function(req, res) { basicController.TestRoute(req, res) });
};