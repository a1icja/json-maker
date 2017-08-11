const path = require('path');
const fs = require('fs-extra');

module.exports = class {
     /**
      * @param  {string} [path] The file to load.
      */
    constructor(path) {
        this.json = {};
        
        if (path) this.load(path);
    }
    
     /**
      * Add a field to JSON data.
      * @param  {string} title The title of the field.
      * @param  {object|string|number|boolean} data The data to store in this field.
      * @return {JSONMaker} This module.
      */
    addField(title, data) {
        if (this.json[title]) return "Value already exists";
        this.json[title] = data;
        return this;
    }

    /**
     * Remove a field to JSON data.
     * @param  {string} title The title of the field.
     * @return {JSONMaker} This module.
     */
    removeField(title) {
        if (!this.json[title]) return "Value doesn't exist";
        delete this.json[title];
        return this;
    }

    /**
     * Checks if a field exists in JSON data.
     * @param  {string} title The title of the field.
     * @return {boolean}
     */
    exists(title) {
        return !!this.json[title];
    }

    /**
     * Writes the stored JSON data to a file.
     * @param  {string} path The file to write JSON data to.
     * @return {Promise}
     */
    write(path) {
        return fs.writeFile(path, this.json);
    }

    _verifyJSON(data) {
        return new Promise((resolve, reject) => {
            try {
                JSON.parse(data);

                return resolve();
            } catch (e) {
                return reject(e);
            }
        });
    }

    /**
     * Loads the JSON data from a file.
     * @param  {string} path The file to load.
     * @return {Promise}
     */
    load(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) return reject(err);
                this._verifyJSON(data).then(() => {
                    this.json = JSON.parse(data);
                    return resolve();
                }).catch(err2 => reject(err2));
            });
        });
    }

    /**
     * Clears JSON data.
     */
    clear() {
        this.json = {};
    };

    /**
     * Gets a field from the JSON data.
     * @param  {string} title The title of the field.
     * @return {(string|object|number|boolean)}
     */
    get(title) {
        return this.json[title] || null;
    }
}
