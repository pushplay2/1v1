'use stict'
import request from 'request';

//Импортируем настройки сервера;
import config from '../config/config.json';

//Обработчик метода ToSend
export var toSend = async function(METHOD_NAME, PARAMETERS, ACCESS_TOKEN, V) {
 /*
 https://oauth.vk.com/authorize?client_id=7071471&display=page&redirect_uri=&scope=status&response_type=token&v=5.52

 https://oauth.vk.com/blank.html#access_token=49bd962b34f4cf7340aae39657d84663c48cf95b79b351f16cf7b166c6413076c22543be873051e6c54d9&expires_in=86400&user_id=335342956
  */

    let customurl = config.api_vk_url + METHOD_NAME + '?' + PARAMETERS + '&access_token=' + ACCESS_TOKEN + '&v=' + V;

    request.get(customurl, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
        console.log(JSON.stringify(body));
    });
};


//Test Route
export var TestRoute = async function(req, res) {

};