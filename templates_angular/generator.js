const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

// generate
module.exports = (template, options, outFile) => {

    let templateFile = path.resolve(`${__dirname}/../templates_angular/${template}.ejs`);

    if (options.templateDir) {
        templateFile = path.resolve(`./${options.templateDir}/${template}.ejs`);
    }

    console.log("Generating", template, '\tto:', outFile);//, '\uusing:', templateFile);
    if (!fs.existsSync(templateFile)) {
        throw "Template file does not exist: " + templateFile;
    }

    fs.readFile(templateFile, 'utf8', function(err, data) {
        if (err) throw err;

        var fn = ejs.compile(data);
        let str = fn(options);
        const prettier = require("prettier");

        console.log("aqui no preetier", outFile)

        str = prettier.format(str);
        fs.writeFileSync(outFile, str);
    });

}
