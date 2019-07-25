import express from "express";
import request from "request";

//Импортируем настройки сервера;
var config = require('./config');

const server = express();

// Подключенные модули
server.get('/', function (req, res) 
{
    console.log("is get??");
    // Параметры для отправки в функцию
    toSend("users.get", "user_ids=213254345", config.get('token'), "5.101");
});

server.post('/', function (req, res) 
{
    // Параметры для отправки в функцию
    res.send("1c606219");
});

statusSet();

async function statusSet()
{
    toSend("groups.enableOnline", "group_id=184791242", config.get('token'), "5.101")
}

async function toSend(METHOD_NAME, PARAMETERS, ACCESS_TOKEN, V)
{
    // Стандартные опции для запроса
    var options = {
        url: 'https://api.vk.com/method/' + 
        METHOD_NAME + '?' + PARAMETERS + '&access_token=' + ACCESS_TOKEN +
        '&v=' + V
    };

    // Работа модуля response
    function callback(error, response, body) 
    {
        if (!error && response.statusCode == 200) // Если успешно, код 200.
        {
            let data = JSON.parse(body);
            console.log("DATA: " + JSON.stringify(data.response));
        } else // Если ошибка, смотри ошибку
        {
            console.log("error: " + error);
            console.log("status: " + response.statusCode);
        }
    }

    // Запускаем запрос на сайт
    request(options, callback);
}


server.listen(config.get('port'), function () 
{
    console.log("Server listen port: "+config.get('port'));
});