# json-maker

## About
json-maker is an easy to use JSON making tool, with the ability to write JSON files and use the raw JSON object as a variable.

## Installation
### NPM 5.0.0 or above:
```
npm install json-maker
```
### NPM 4.6.1 or below:
```
npm install --save json-maker
```

## Constructor
### load
Optional: True
Returns: `Nothing`

`options`
*  path : File to load on construction

Loads a JSON file on construction into the native JSON storage. 

```js
const _jsonMaker = require('json-maker');
const jsonMaker = new _jsonMaker('./kek9.json');

setTimeout(() => {
    console.log(JSON.stringify(jsonMaker.json));
}, 1000);
```

## API
### json
Returns: `JSON Object`

Returns the raw JSON Object that was created using addField()

```js
const _jsonMaker = require('json-maker');
const jsonMaker = new _jsonMaker();

console.log(JSON.stringify(jsonMaker.json));
```

### addField(title, data)
Returns: `Module`

`options`
*  title : Title of JSON entry
*  data : Data to be associated with JSON title

Adds a field to the JSON object with the specified title and data values.

```js
const _jsonMaker = require('json-maker');
const jsonMaker = new _jsonMaker();

jsonMaker.addField('kek9', 'lul5');

console.log(JSON.stringify(jsonMaker.json));
```

### removeField(title)
Returns: `Module`

`options`
*  title : Title of JSON entry

Allows you to delete a field based on the key title.

```js
const _jsonMaker = require('json-maker');
const jsonMaker = new _jsonMaker();

jsonMaker.removeField('kek9');

console.log(JSON.stringify(jsonMaker.json));
```

### write(file-path)
Returns: `Promise`

`options`
*  file-path : Path and file to write to. Has no extension by default.

Writes the JSON object in the package to a the specified file.

```js
const _jsonMaker = require('json-maker');
const jsonMaker = new _jsonMaker();

jsonMaker.write('./kek.json').then(() => console.log('Wrote to file')).catch(err => console.error(err));
```

### load(file-path)
Returns: `Promise`

`options`
*  file-path : Path and file to load from. Has no extension by default.

Loads the JSON object from the file specified.

```js
const _jsonMaker = require('json-maker');
const jsonMaker = new _jsonMaker();

jsonMaker.load('./test.json').then(()=>{
    console.log(JSON.stringify(jsonMaker.json));
});
```

### exists(title)
Returns: `Boolean`

`options`
*  title : Title of JSON entry

Returns a boolean depending on if the entry exists or not.

```js
const _jsonMaker = require('json-maker');
const jsonMaker = new _jsonMaker();

console.log(jsonMaker.exists('kek9'));
```

### clear()
Returns: `null`

Clears the JSON object in the package.

```js
const _jsonMaker = require('json-maker');
const jsonMaker = new _jsonMaker();

jsonMaker.clear();

console.log(JSON.stringify(jsonMaker.json));
```

### get(title)
Returns: `null` or `Key Value`

`options`
*  title : Key name of the JSON field

Allows you to get the value of a key from the JSON object.

```js
const _jsonMaker = require('json-maker');
const jsonMaker = new _jsonMaker();

jsonMaker.addField('title-here', 'value-here');

console.log(jsonMaker.get('title-here'));

```

## To-Do

### Allow for extra JSON objects
'Nuff said

### Make option to automatically stringify
Since this package will most likely become a class, it would be a part of the constructor.

### Make option for multiple fields with same key value
Since this package will most likely become a class, it would be a part of the constructor.
