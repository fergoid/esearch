var elasticsearch = require('elasticsearch'),
    fs = require('fs'),
    apps = JSON.parse(fs.readFileSync(__dirname + '/apps2.json'));
var client = new elasticsearch.Client({  
    host: 'https://search-maisie-ic6523tg4w3tw45wb6ekjbvoxm.eu-west-1.es.amazonaws.com/',
    log: 'trace'
});

for (var i = 0; i < apps.length; i++) {
    console.log(apps[i].id);
    console.log(apps[i]);
    client.create({
        index: "troux",
        type: "application",
        id: i,
        body: apps[i]
    }, function (error, response) {
        if (error) {
            console.error(error);
            console.log(response);
            return;
        }
        // else {
        //     console.log(response);  
        // }
    });
}
