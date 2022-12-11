const TextUtil = {
    cleanEmail: (text?: string) => {
        if (text === undefined) {
            return text || "";
        }
        return text.trim();
    },
    cleanName: (text?: string) => {
        if (text === undefined) {
            return text || "";
        }
        return text
            .replace(/[^a-zA-Z-'. ]+$/g, "")
            .replace(/\s\s+/g, " ")
            .trim();
    },
    cleanText: (text?: string) => {
        if (text === undefined) {
            return text || "";
        }
        return text.trim();
    },
    cleanUsername: (text?: string) => {
        if (text === undefined) {
            return text || "";
        }
        return text.replace(/[^0-9a-zA-Z]/g, "").trim();
    },
    cleanTags: (text?: string) => {
        if (text === undefined) {
            return text || "";
        }
        return text
            .replace(/[^a-zA-Z-'., ]+$/g, "")
            .replace(/\s\s+/g, " ")
            .trim();
    },
    capitalizeEachWord: (text?: string) => {
        if (text === undefined) {
            return text || "";
        }
        const words = text.split(" ");
        for (let index = 0; index < words.length; index++) {
            words[index] = words[index][0].toUpperCase() + words[index].slice(1, words[index].length);
        }
        return words.join(" ");
    },
};

export default TextUtil;
