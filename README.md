# localStorageDB
Increase localStorage size 10 times or more! This tiny script uses bare minimum of IndexedDB to give you a simple key - value local storage system. It's asnychchronous so it's performance is also faster than native localStorage(in theory and this must be confirmed by testing)

* 10x more space than localStorage
* Asynchronous - faster than localStorage
* Minimal code - 0.76kB!
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

### You can use it as a one-liner in your JS code:
Instead of including a file you can copy and paste this piece of code to your JS file

```javascript
!function(){function e(t,o){return n?void(n.transaction("s").objectStore("s").get(t).onsuccess=function(e){var t=e.target.result&&e.target.result.v||null;o(t)}):void setTimeout(function(){e(t,o)},100)}var t=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;if(!t)return void console.error("indexDB not supported");var n,o={k:"",v:""},r=t.open("d2",1);r.onsuccess=function(e){n=this.result},r.onerror=function(e){console.error("indexedDB request error"),console.log(e)},r.onupgradeneeded=function(e){n=null;var t=e.target.result.createObjectStore("s",{keyPath:"k"});t.transaction.oncomplete=function(e){n=e.target.db}},window.ldb={get:e,set:function(e,t){o.k=e,o.v=t,n.transaction("s","readwrite").objectStore("s").put(o)}}}();
```