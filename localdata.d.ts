declare module 'localdata' {
    class ldbInterface {
        static get(key: string, callback: (value: string) => void): void;
        static set(key: string, val: string, callback?: () => void): void;
        static delete(key: string, callback?: () => void): void;
        static list(callback: (result: string[]) => void): void;
        static getAll(callback: (result: string[]) => void): void;
        static clear(callback?: () => void): void;
    }

    export default ldbInterface;
}