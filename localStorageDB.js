(function() {
  var win = typeof window !== 'undefined' ? window : {}
  var indexedDB = win.indexedDB || win.mozIndexedDB || win.webkitIndexedDB || win.msIndexedDB;
  if (typeof window !== 'undefined' && !indexedDB) {
    console.error('indexDB not supported');
    return;
  }
  var db,
    request = indexedDB.open('ldb', 1);
  request.onsuccess = function(evt) {
    db = this.result;
  };
  request.onerror = function(event) {
    console.error('indexedDB request error');
    console.log(event);
  };

  request.onupgradeneeded = function(event) {
    db = null;
    var store = event.target.result.createObjectStore('s', {
      keyPath: 'k'
    });

    store.transaction.oncomplete = function (e){
      db = e.target.db; 
    };
  };

  // if using proxy mode comment this

  var ldb = {
    get: function(key, callback) {
      if (!db) {
        setTimeout(function () { ldb.get(key, callback); }, 50);
        return;
      }
      db.transaction('s').objectStore('s').get(key).onsuccess = function(event) {
        var result = (event.target.result && event.target.result['v']) || null;
        callback(result);
      };
    },
    set: function(key, value, callback) {
      if (!db) {
        setTimeout(function () { ldb.set(key, value, callback); }, 50);
        return;
      }
      let txn = db.transaction('s', 'readwrite'); 
      txn.oncomplete = function(event) {
        var toString$ = {}.toString;
        if (toString$.call(callback).slice(8, -1) === 'Function') {
          callback();
        }
      }
      txn.objectStore('s').put({
        'k': key,
        'v': value,
      });
      txn.commit();
    }
  }
  win['ldb'] = ldb;
  if (typeof Module !== 'undefined') {
    Module.exports = ldb;
  }

  // Use only for apps that will only work on latest devices only

  // window.ldb = new Proxy({}, {
  //   get: function(func, key, callback) {
  //     return (key === 'get') ? getValue : function(callback) {
  //       return getValue(key, callback)
  //     };
  //   },
  //   set: function(func, key, value) {
  //    let txn = db.transaction('s', 'readwrite'); 
  //    txn.oncomplete = function(event) {
  //      var toString$ = {}.toString;
  //      if (toString$.call(callback).slice(8, -1) === 'Function') {
  //        callback();
  //      }
  //    }
  //    txn.objectStore('s').put({
        //   'k': key,
        //   'v': value,
        // });
  //    txn.commit();
  //   }
  // });
})();
