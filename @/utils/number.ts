const NumberUtil = {
    cleanMobile: (text?: string) => {
        if (text === undefined) {
            return text || "";
        }
        return text.replace(/[^0-9+]/g, "");
    },
    cleanMobileNoPlus: (text?: string) => {
        if (text === undefined) {
            return text || "";
        }
        return text.replace(/[^0-9]/g, "");
    },
    cleanOtp: (text?: string, length?: number) => {
        if (text === undefined) {
            return text || "";
        }
        return text.replace(/[^0-9]+$/g, "").substring(0, length);
    },
    cleanFloat: (text?: string) => {
        if (text === undefined) {
            return text || "";
        }
        const parts = text.split(".");

        let combined = "";
        if (parts.length) {
            // this will delete the items from the original array
            const part1 = parts.splice(0, 2).join(".");
            // that's why now we have less elements here
            const partRemaining = parts.join("");
            combined = `${part1}${partRemaining}`;
        }

        // clean all non-numeric characters
        // eslint-disable-next-line no-useless-escape
        combined = combined.replace(/[^\d\.]/gi, "");

        return combined;
    },
    cleanInteger: (text?: string, length?: number) => {
        if (text === undefined) {
            return text || "";
        }
        return text.replace(/[^\d]/gi, "").substring(0, length);
    },
};

export default NumberUtil;
