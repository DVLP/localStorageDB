# localStorageDB
Increase localStorage size 10 times or more! This tiny script uses bare minimum of IndexedDB to give you a simple key - value local storage system. It's asnychchronous so it's performance is also faster than native localStorage(in theory and this must be confirmed by testing)

* 10x more space than localStorage
* Asynchronous - faster than localStorage
* Minimal code - 0.76kB!
* No dependencies
* Cross-browser support: Chrome, Firefox, IE 11+, Edge, iOS Safari, mobile Chrome, Android Browser

## Usage

You can either use the snippet at the bottom or install the module

`npm i localstoragebooster`

```javascript
import ldb from 'localstoragebooster'

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
```

## For modern browsers only(Chrome, Firefox, Edge) but not IE or Safari

This version makes setting values even easier and it looks more like original localStorage. To use this mode uncomment marked section in localStorageDB.js

Now you can set values like this:
```javascript
ldb.nameGoesHere = 'value goes here';
```

Getting will stay the same, because callback is still needed for asynchronous retrieval

### You can use it as a one-liner in your JS code:
Instead of including a file you can copy and paste this piece of code to your JS file

> Minified by `uglifyjs -c -m -- localStorageDB.js > localStorageDB.min.js`

```javascript
!function(){var r,i,e="undefined"!=typeof window?window:{},t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB;"undefined"==typeof window||t?((t=t.open("ldb",1)).onsuccess=function(e){r=this.result},t.onerror=function(e){console.error("indexedDB request error"),console.log(e)},t.onupgradeneeded=function(e){r=null,e.target.result.createObjectStore("s",{keyPath:"k"}).transaction.oncomplete=function(e){r=e.target.db}},e.ldb=i={get:function(e,t){r?r.transaction("s").objectStore("s").get(e).onsuccess=function(e){e=e.target.result&&e.target.result.v||null;t(e)}:setTimeout(function(){i.get(e,t)},50)},set:function(t,n,o){if(r){let e=r.transaction("s","readwrite");e.oncomplete=function(e){"Function"==={}.toString.call(o).slice(8,-1)&&o()},e.objectStore("s").put({k:t,v:n}),e.commit()}else setTimeout(function(){i.set(t,n,o)},50)}},"undefined"!=typeof module&&(module.exports=i)):console.error("indexDB not supported")}();

```
