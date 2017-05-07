let express = require('express');
let token = 'zhufengpeixun';
let crypto = require('crypto');
let app = express();
app.get('/', function (req, res) {
    let {signature, timestamp, nonce, echostr} = req.query;
    let str = [token, timestamp, nonce].sort().join('');
    let sign = crypto.createHash('sha1').update(str).digest('hex');
    if (sign == signature) {
        res.send(echostr);
    } else {
        res.send('wrong');
    }
});

app.listen(8080);