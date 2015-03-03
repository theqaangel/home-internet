//Trust all certificates
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

exports.getTemp = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.send(200, '25');
}
