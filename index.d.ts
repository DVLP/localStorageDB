declare module 'localdata' {
    class ldbInterface {
        static get(key: string, callback: (value: string | null) => void): void;
        static set(key: string, val: string, callback?: () => void): void;
        static delete(key: string, callback?: () => void): void;
        static list(callback: (result: string[] | null) => void): void;
        static getAll(callback: (result: { k: string, v: string }[] | null) => void): void;
        static clear(callback?: () => void): void;
    }

    export default ldbInterface;
}
