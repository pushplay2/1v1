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
    //app.get('/', async function(req, res) { basicController.TestRoute(req, res) });
    app.get('/', async function (req, res) 
    {
        console.log("get!");
    });

    app.post('/', async function (req, res) 
    {
        console.log(req.body);
        // https://api.vk.com/method/messages.send?v=5.52&access_token=
        //random_id=2 group_id=185014513 domain=gdima95531 message="Helloworldbots" 
        // Пример параметров user_ids=210700286&fields=bdate
        if(req.body.type == "message_new") // Ответ на сообщение
            basicController.toSend("messages.send", "random_id=" + (req.body.object.id + 1) + "&group_id=" + "184791242"  + "&domain=gdima95531" + "&message=" + " Hellow world bots", config.token, config.version_API);
        res.status(200).send("ok").end();
    });
};