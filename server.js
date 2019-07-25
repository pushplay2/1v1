"use strict"
import express from "express";
import request from "request";

import config from "./config/config";

const server = express();

// Подключенные модули

server.get('/', function (req, res) 
{
    console.log("is get??");
    // Параметры для отправки в функцию
    toSend("users.get", "user_ids=213254345", config.token, "5.101");
});

server.post('/', function (req, res)
{
    console.log("Is data control?");
});

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


server.listen(config.port, function () 
{
    console.log("Server listen port: 3000");
});