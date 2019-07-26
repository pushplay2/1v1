'use strict'
//Импортируем необходимые зависимости(модули)
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';

//Импортируем настройки сервера;
import config from './config/config.json';

//Основной контроллер
import * as basicController from './controllers/general';

//Создаем экземпляр приложения 
var server = express();

//Настройки сервера перед первым запуском
server.use(morgan('dev')); // - Логирование
server.use(bodyParser.json()); 
server.use(bodyParser.urlencoded({ extended: true }));

// Конфигурируем фабрику маршрутизации
require('./approutes/routes')(server);

server.listen(config.port, function () 
{
    console.log(`Server running at http://${config.hostname}:${config.port}/`);
    //console.log('Run test method!');
    //Отправка запроса
    //basicController.toSend("status.get", "group_id="+config.gid, config.token, config.version_API);
    //basiccontroller.toSend("users.get", "user_ids=213254345", config.get('token'), config.get('version_API')); //WORK !!!!
});
