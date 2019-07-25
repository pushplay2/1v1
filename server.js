//Импортируем необходимые зависимости(модули)
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';

//Импортируем настройки сервера;
var config = require('./config');

//Основной контроллер
import * as basiccontroller from './controllers/General';

//Создаем экземпляр приложения 
var app = express();

//Настройки сервера перед первым запуском
app.use(bodyParser.json()); //req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev')); // log every request to the console
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// Конфигурируем фабрику маршрутизации
require('./approutes/routes')(app);

//Обьявляем экземпляр сервера
var server = require('http').createServer(app)

server.listen(config.get('port'), function () 
{
    console.log(`Server running at http://${config.get('hostname')}:${config.get('port')}/`);
    console.log('Run test method!');
    //console.log(`${config.get('api_vk_url')}${'status.get'}?group_id=${config.get('gid')}'&access_token='${config.get('token')}'&v='${config.get('version_API')}`);
    //Отправка запроса
    //basiccontroller.toSend("status.get", "group_id="+config.get('gid'), config.get('token'), config.get('version_API'));
    basiccontroller.toSend("users.get", "user_ids=213254345", config.get('token'), config.get('version_API')); //WORK !!!!
});

//DIMAS
//"token" : "7a214ca8531508a5ec865135a988f76948c28158c40952558ba7747c61f132c3312d31db9becd5d0d34af",
//NIKITA
//"token" : "1ed49f6afd7c51f6867152c104568db5b62813413608992a0d48d879e9c21eb959031ebc644751e72fede",