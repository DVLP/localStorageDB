# LocalData - formerly localStorageDB
Increase localStorage size 10 times or more! This tiny script uses bare minimum of IndexedDB to give you a simple key - value local storage system. It's asnychchronous so it's performance is also faster than native localStorage(in theory and this must be confirmed by testing)

* 10x more space than localStorage
* Asynchronous - faster than localStorage
* Minimal code - 1.6kB(0.75kB gzipped)!
* No dependencies
* Cross-browser support: Chrome, Firefox, IE 11+, Edge, iOS Safari, mobile Chrome, Android Browser

## Usage

You can either use the snippet at the bottom or install the module

`npm i localdata`

```javascript
import ldb from 'localdata'

// Setting values
ldb.set('nameGoesHere', 'value goes here');
// or 
ldb.set('nameGoesHere', 'value goes here', function(){
  console.log("Data is successfully written to the disk.")
}); 

// Getting values - callback is required because the data is being retrieved asynchronously:
ldb.get('nameGoesHere', function (value) {
  console.log('And the value is', value);
});

// Deleting one value (callback optional)
ldb.delete('nameGoesHere', () => console.log('Value deleted'));

// List all keys
ldb.list(function(list) {
  console.log('List of keys', list)
});

// Get all keys and values
ldb.getAll(function(entries) {
  console.log('All values', entries)
});

// Clear everything (callback optional)
ldb.clear(function() {
  console.log('Storage cleared')
});
```

## For modern browsers only(Chrome, Firefox, Edge) but not IE or Safari

This version makes setting values even easier and it looks more like original localStorage. To use this mode uncomment marked section in localdata.js

Now you can set values like this:
```javascript
ldb.nameGoesHere = 'value goes here';
```

Getting will stay the same, because callback is still needed for asynchronous retrieval

### You can use it as a one-liner in your JS code:
Instead of including a file you can copy and paste this piece of code to your JS file

> Minified by `uglifyjs -c -m -- localdata.js > localdata.min.js`

```javascript
!function(){var s,c,e="undefined"!=typeof window?window:{},t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB;"undefined"==typeof window||t?((t=t.open("ldb",1)).onsuccess=function(e){s=this.result},t.onerror=function(e){console.error("indexedDB request error"),console.log(e)},t={get:(c={ready:!(t.onupgradeneeded=function(e){s=null,e.target.result.createObjectStore("s",{keyPath:"k"}).transaction.oncomplete=function(e){s=e.target.db}}),get:function(e,t){s?s.transaction("s").objectStore("s").get(e).onsuccess=function(e){e=e.target.result&&e.target.result.v||null;t(e)}:setTimeout(function(){c.get(e,t)},50)},set:function(t,n,o){if(s){let e=s.transaction("s","readwrite");e.oncomplete=function(e){"Function"==={}.toString.call(o).slice(8,-1)&&o()},e.objectStore("s").put({k:t,v:n}),e.commit()}else setTimeout(function(){c.set(t,n,o)},50)},delete:function(e,t){s?s.transaction("s","readwrite").objectStore("s").delete(e).onsuccess=function(e){t&&t()}:setTimeout(function(){c.delete(e,t)},50)},list:function(t){s?s.transaction("s").objectStore("s").getAllKeys().onsuccess=function(e){e=e.target.result||null;t(e)}:setTimeout(function(){c.list(t)},50)},getAll:function(t){s?s.transaction("s").objectStore("s").getAll().onsuccess=function(e){e=e.target.result||null;t(e)}:setTimeout(function(){c.getAll(t)},50)},clear:function(t){s?s.transaction("s","readwrite").objectStore("s").clear().onsuccess=function(e){t&&t()}:setTimeout(function(){c.clear(t)},50)}}).get,set:c.set,delete:c.delete,list:c.list,getAll:c.getAll,clear:c.clear},e.ldb=t,"undefined"!=typeof module&&(module.exports=t)):console.error("indexDB not supported")}();


```
