# localStorageDB
Increase localStorage size 10 times or more! This tiny script uses bare minimum of IndexedDB to give you a simple key - value local storage system. It's asnychchronous so it's performance is also faster than native localStorage(in theory and this must be confirmed by testing)

* 10x more space than localStorage
* Asynchronous - faster than localStorage
* Minimal code
* No dependencies
* Cross-browser support: Chrome, Firefox, IE 11+, Edge, iOS Safari, mobile Chrome, Android Browser

## Usage


```javascript
// Setting values
ldb.set('nameGoesHere', 'value goes here');

// Getting values - callback is required because the data is being retrieved asynchronously:
ldb.get('nameGoesHere', function (value) {
  console.log('And the value is', value);
});
```

## For modern browsers only(Chrome, Firefox, Edge) but not IE or Safari

This version makes setting values even easier and it looks more like original localStorage. To use this mode uncomment marked section in localStorageDB.js

Now you can set values like this:
```javascript
ldb.nameGoesHere = 'value goes here';
```

Getting will stay the same, because callback is still needed for asynchronous retrieval