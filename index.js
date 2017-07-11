const path = require('path');
const fs = require('fs-extra');

module.exports = new function() {
    this.json = {};

    this.addField = function(title, data) {
        if(this.json[title]) return "Value already exists";
        this.json[title] = data;
    };

    this.write = function(toWrite) {
        fs.writeFile(`${path.dirname}/${toWrite}`, JSON.stringify(this.json)).catch(err => console.log(err));
    };
    
    this.clear = function() {
        this.json = {};
    };

    this.search = function(title) {
        if(this.json[title]) return this.json[title];
        if(!this.json[title]) return null;
        return "An error occurred.";
    };
};