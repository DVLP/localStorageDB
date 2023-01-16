declare module 'localdata' {
    import ldb from 'localstoragedb'

    class ldbInterface {
        static get(key: string, callback: (string) => void): void {
            ldb.get(key, callback);
        }
        static set(key: string, val: string, callback?: () => void): void {
            ldb.set(key, val, callback);
        }
        static delete(key: string, callback?: () => void): void {
            ldb.delete(key, callback);
        }
        static list(callback: (result: string[]) => void): void {
            ldb.list(callback);
        }
        static getAll(callback: (result: string[]) => void): void {
            ldb.getAll(callback);
        }
        static clear(callback?: () => void): void {
            ldb.clear(callback);
        }
    }

    export default ldbInterface;
}