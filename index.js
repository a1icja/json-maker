const path = require('path');
const fs = require('fs-extra');

module.exports = new function () {
    /**
     * JSON data.
     * @type {Object}
     */
    this.json = {};

    /**
     * Add a field to JSON data.
     * @param  {string} title The title of the field.
     * @param  {object} data The data to store in this field. Can also be a string.
     * @return {Promise}
     */
    this.addField = function (title, data) {
        if (this.json[title]) return "Value already exists";
        this.json[title] = data;
        return this;
    };

    /**
     * Remove a field to JSON data.
     * @param  {string} title The title of the field.
     * @return {Promise}
     */
    this.removeField = function (title) {
        if (!this.json[title]) return "Value doesn't exist";
        delete this.json[title];
        return this;
    };

    /**
     * Checks if a field exists in JSON data.
     * @param  {string} title The title of the field.
     * @return {boolean}
     */
    this.exists = function (title) {
        return !!this.json[title];
    };

    /**
     * Writes the stored JSON data to a file.
     * @param  {string} toWrite The file to write JSON data to.
     * @return {Promise}
     */
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

    /**
     * Loads the JSON data from a file.
     * @param  {string} toLoad The file to load.
     * @return {Promise}
     */
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

    /**
     * Clears JSON data.
     */
    this.clear = function () {
        this.json = {};
    };

    /**
     * Gets a field from the JSON data.
     * @param  {string} title The title of the field.
     * @return {Key Value}
     */
    this.get = function (title) {
        return this.json[title] || null;
    };
};
