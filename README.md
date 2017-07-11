# json-maker

## About
json-maker is an easy to use JSON making tool, with the ability to write JSON files and use the raw JSON object as a variable.

## Installation
```
npm install --save json-maker
```

## API
### json
Returns: `JSON Object`  

Returns the raw JSON Object that was created using addField()

```js
const jsonMaker = require('json-maker');

console.log(JSON.stringify(jsonMaker.json));
```

### addField(title, data)
Returns: `null`  

`options`  
* `title : Title of JSON entry
*  data : Data to be associated with JSON title

Adds a field to the JSON object with the specified title and data values.

```js
const jsonMaker = require('json-maker');

jsonMaker.addField('kek9', 'lul5');

console.log(JSON.stringify(jsonMaker.json));
```

### write(file-name)
Returns: `null`

`options`
*  file-name : Name of file to write to. Has no extention by default.

Writes the JSON object in the package to a the specified file in the working directory. Uses JSON.stringify()

```js
const jsonMaker = require('json-maker');

jsonMaker.write('kek.json');
```

### clear()
Returns: `null`

Clears the JSON object in the package.

```js
const jsonMaker = require('json-maker');

jsonMaker.clear();

console.log(JSON.stringify(jsonMaker.json));
```
