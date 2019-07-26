'use stict'
import request from 'request';

//Импортируем настройки сервера;
import config from '../config/config.json';

/// token key = 4d5dd1d3f351a2435f0c568c4b4c7c1d565ba1971e1b93d2d13ed6a690a92fd0c4e8503d567f3da81cd09

//Обработчик метода ToSend
export var toSend = async function(METHOD_NAME, PARAMETERS, ACCESS_TOKEN, V) {

    let customurl = config.api_vk_url + METHOD_NAME + '?' + PARAMETERS + '&access_token=' + ACCESS_TOKEN + '&v=' + V;

    request.get(customurl, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
        console.log(JSON.stringify(body));
    });
};


//Test Route
export var TestRoute = async function(req, res) {

};