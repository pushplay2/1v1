//Импортируем необходимые зависимости(модули)
import express from 'express';
import morgan from 'morgan';
import path from 'path';

//Импортируем настройки сервера;
var config = require('./config');

//Основной контроллер
import * as basiccontroller from './controllers/General';

//Создаем экземпляр приложения 
var app = express();

//Настройки сервера перед первым запуском
app.use(morgan('dev')); // log every request to the console

// Конфигурируем фабрику маршрутизации
require('./approutes/routes')(app);

//Обьявляем экземпляр сервера
var server = require('http').createServer(app)

server.listen(config.get('port'), function () 
{
    console.log(`Server running at http://${config.get('hostname')}:${config.get('port')}/`);
    console.log('Run test method!');
    //Отправка запроса
    basiccontroller.toSend("status.get", "group_id="+config.get('gid'), config.get('token'), config.get('version_API'));
    //basiccontroller.toSend("users.get", "user_ids=213254345", config.get('token'), config.get('version_API')); //WORK !!!!
});
