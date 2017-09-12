/**
 * Dependência do script
 * npm install --save edit-json-file
 * npm install --save gitlog
 * author: Eduardo Vieira
 */

const editJsonFile = require("edit-json-file");
var file = editJsonFile(`${__dirname}/www/assets/version.json`);

var gitlog = require('gitlog'),
    options = {
        repo: __dirname,
        number: 20,
        //author: 'Eduardo Vieira',
        fields: ['hash', 'abbrevHash', 'subject', 'authorName', 'authorDateRel'],
        execOptions: {
            //maxBuffer: 1000 * 1024
        }
    }

gitlog(options, function(error, commits) {
    // Commits is an array of commits in the repo
    file.set("version", commits[0].abbrevHash);
    file.set("authorName", commits[0].authorName);
    file.set("subject", commits[0].subject);
    file.save();;

    console.log(commits[0].abbrevHash);
    console.log(__dirname);
})
