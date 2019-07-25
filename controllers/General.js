const request = require('request');

//Импортируем настройки сервера;
let config = require('../config');


//Обработчик метода ToSend
export var toSend = async function(METHOD_NAME, PARAMETERS, ACCESS_TOKEN, V) {
/**
 * url: 'https://api.vk.com/method/' + 
        METHOD_NAME + '?' + PARAMETERS + '&access_token=' + ACCESS_TOKEN +
        '&v=' + V
 */
    let customurl = config.get('api_vk_url') + METHOD_NAME + '?' + PARAMETERS + '&access_token=' + ACCESS_TOKEN + '&v=' + V;

    request.get(customurl, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
        console.log(JSON.stringify(body));
    });
};


//Test Route
export var TestRoute = async function(req, res) {

};