var express = require('express');
var app     = express();

app.get('/', function(req,res){
	console.log('Charles, Server New Hit: ' + timeStamp())
	res.send('Charles, Server New Hit: ' + timeStamp());
});

function timeStamp(){

    var currentdate = new Date(); 
    var prettyTime = currentdate.getHours() + ":" + 
                currentdate.getMinutes() + ":" +
                currentdate.getSeconds();
	return prettyTime;                
}

var port = 3000;
app.listen(port,function(){
	console.log('Listening on port:' + port);
});
