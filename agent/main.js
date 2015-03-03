var PythonShell = require('python-shell');
 
//Trust all certificates
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

exports.getTemp = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    var options = {
      mode: 'json',
      scriptPath: '/usr/local/bin/',
      args: ['-q', '-c']
    };
    
    PythonShell.run('temper-poll', options, function (err, results) {
      if (err) throw res.send(500, err);
      if (results.length === 0) throw res.send(500, err);
      res.send(200, results[0]);
    });
}
