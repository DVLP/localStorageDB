import ldb from 'localstoragedb'
ldb.set('some_name', 'Hello, I\'m a value!')
ldb.get('some_name', (result) => console.log(result))
