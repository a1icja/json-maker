const path = require('path');
const fs = require('fs-extra');

module.exports = new function () {
    this.json = {};

    this.addField = function (title, data) {
        if (this.json[title]) return "Value already exists";
        this.json[title] = data;
        return this;
    };

    this.removeField = function (title) {
        if (!this.json[title]) return "Value doesn't exist";
        delete this.json[title];
        return this;
    };

    this.exists = function (title) {
        return !!this.json[title];
    };

    this.write = function (toWrite) {
        return fs.writeFile(toWrite, this.json);
    };

    this._verifyJSON = function (data) {
        return new Promise((resolve, reject) => {
            try {
                JSON.parse(data);
                
                return resolve();
            } catch (e) {
                return reject(e);
            }
        });
    };

    this.load = function (toLoad) {
        return new Promise((resolve, reject) => {
            fs.readFile(toLoad, 'utf8', (err, data) => {
                if (err) return reject(err);
                this._verifyJSON(data).then(() => {
                    this.json = JSON.parse(data);
                    return resolve();
                }).catch(err2 => reject(err2));
            });
        });
    };

    this.clear = function () {
        this.json = {};
    };

    this.get = function (title) {
        return this.json[title] || null;
    };
};
