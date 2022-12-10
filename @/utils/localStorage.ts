import NumberUtil from "@/utils/number";

const LocalStorageUtil = {
    get: (key: string, defaultData?: string) => localStorage.getItem(key) || defaultData,
    getBoolean: (key: string, defaultData?: boolean) => {
        const data = LocalStorageUtil.get(key);
        try {
            if (!data) {
                return defaultData;
            }
            return data === "true";
        } catch (error) {
            return defaultData;
        }
    },
    getNumber: (key: string, defaultData?: number) => {
        const data = LocalStorageUtil.get(key);
        try {
            if (!data) {
                return defaultData;
            }
            if (NumberUtil.cleanFloat(data) !== data) {
                return defaultData;
            }
            return Number(data);
        } catch (error) {
            return defaultData;
        }
    },
    getObject: <T>(key: string, defaultData?: T) => {
        const data = LocalStorageUtil.get(key);
        try {
            if (!data) {
                return defaultData;
            }
            return JSON.parse(data) as T;
        } catch (error) {
            return defaultData;
        }
    },

    //

    set: (key: string, value: string) => {
        localStorage.setItem(key, value);
    },
    setBoolean: (key: string, data?: boolean) => {
        const value = data ? `${data}`.toLowerCase() : "false";
        LocalStorageUtil.set(key, value);
    },
    setNumber: (key: string, data?: number) => {
        const value = data ? `${data}` : "";
        LocalStorageUtil.set(key, value);
    },
    setObject: <T>(key: string, data?: T) => {
        const value = data ? `${JSON.stringify(data)}` : "{}";
        LocalStorageUtil.set(key, value);
    },

    //

    remove: (key: string) => {
        localStorage.removeItem(key);
    },
    clear: () => {
        localStorage.clear();
    },
};

export default LocalStorageUtil;
