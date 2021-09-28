const tcpp = require('tcp-ping');

setInterval(() => {
    tcpp.probe('1.1.1.1', 80, function(err, available) {
        console.log(available);
    });
}, 10000);
