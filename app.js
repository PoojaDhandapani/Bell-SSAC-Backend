var Connection = require('tedious').Connection;  
var config = {  
    server: ' ',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'PoojaDhandapani', //update me
            password: 'Poojapreet@28a'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        trustServerCertificate: true,
        encrypt: true,
        database: 'testDB'  //update me
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

connection.connect();