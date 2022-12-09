import get from "lodash.get";
import { ChangeEventHandler, FocusEventHandler } from "react";

import TextUtil from "./text";

export type FnChange = ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
export type FnBlur = FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;

export default {
    cleanEmailOnChange: (fnChange?: FnChange) => {
        const eventHandler: FnChange = (e) => {
            if (!fnChange) {
                return;
            }
            const value = get(e, "target.value", "");
            if (e?.target?.value) {
                e.target.value = TextUtil.cleanEmail(value);
            }
            fnChange(e);
        };
        return eventHandler;
    },
    cleanNameOnChange: (fnChange?: FnChange) => {
        const eventHandler: FnChange = (e) => {
            if (!fnChange) {
                return;
            }
            const value = get(e, "target.value", "");
            if (e?.target?.value) {
                e.target.value = TextUtil.cleanName(value);
            }
            fnChange(e);
        };
        return eventHandler;
    },
    cleanTextOnChange: (fnChange?: FnChange) => {
        const eventHandler: FnChange = (e) => {
            if (!fnChange) {
                return;
            }
            const value = get(e, "target.value", "");
            if (e?.target?.value) {
                e.target.value = TextUtil.cleanText(value);
            }
            fnChange(e);
        };
        return eventHandler;
    },
    cleanUsernameOnChange: (fnChange?: FnChange) => {
        const eventHandler: FnChange = (e) => {
            if (!fnChange) {
                return;
            }
            const value = get(e, "target.value", "");
            if (e?.target?.value) {
                e.target.value = TextUtil.cleanUsername(value);
            }
            fnChange(e);
        };
        return eventHandler;
    },
    cleanTagsOnChange: (fnChange?: FnChange) => {
        const eventHandler: FnChange = (e) => {
            if (!fnChange) {
                return;
            }
            const value = get(e, "target.value", "");
            if (e?.target?.value) {
                e.target.value = TextUtil.cleanTags(value);
            }
            fnChange(e);
        };
        return eventHandler;
    },
    capitalizeEachWordOnChange: (fnChange?: FnChange) => {
        const eventHandler: FnChange = (e) => {
            if (!fnChange) {
                return;
            }
            const value = get(e, "target.value", "");
            if (e?.target?.value) {
                e.target.value = TextUtil.capitalizeEachWord(value);
            }
            fnChange(e);
        };
        return eventHandler;
    },

    //

    cleanEmailOnBlur: (fnChange: FnChange, fnBlur: FnBlur, value?: string) => {
        const eventHandler: FnBlur = (e) => {
            if (!fnBlur || !fnChange) {
                return;
            }
            if (e?.target?.value) {
                e.target.value = TextUtil.cleanEmail(value);
                fnChange(e);
            }
            fnBlur(e);
        };
        return eventHandler;
    },
    cleanNameOnBlur: (fnChange: FnChange, fnBlur: FnBlur, value?: string) => {
        const eventHandler: FnBlur = (e) => {
            if (!fnBlur || !fnChange) {
                return;
            }
            if (e?.target?.value) {
                e.target.value = TextUtil.cleanName(value);
                fnChange(e);
            }
            fnBlur(e);
        };
        return eventHandler;
    },
    cleanTextOnBlur: (fnChange: FnChange, fnBlur: FnBlur, value?: string) => {
        const eventHandler: FnBlur = (e) => {
            if (!fnBlur || !fnChange) {
                return;
            }
            if (e?.target?.value) {
                e.target.value = TextUtil.cleanText(value);
                fnChange(e);
            }
            fnBlur(e);
        };
        return eventHandler;
    },
    cleanUsernameOnBlur: (fnChange: FnChange, fnBlur: FnBlur, value?: string) => {
        const eventHandler: FnBlur = (e) => {
            if (!fnBlur || !fnChange) {
                return;
            }
            if (e?.target?.value) {
                e.target.value = TextUtil.cleanUsername(value);
                fnChange(e);
            }
            fnBlur(e);
        };
        return eventHandler;
    },
    cleanTagsOnBlur: (fnChange: FnChange, fnBlur: FnBlur, value?: string) => {
        const eventHandler: FnBlur = (e) => {
            if (!fnBlur || !fnChange) {
                return;
            }
            if (e?.target?.value) {
                e.target.value = TextUtil.cleanTags(value);
                fnChange(e);
            }
            fnBlur(e);
        };
        return eventHandler;
    },
    capitalizeEachWordOnBlur: (fnChange: FnChange, fnBlur: FnBlur, value?: string) => {
        const eventHandler: FnBlur = (e) => {
            if (!fnBlur || !fnChange) {
                return;
            }
            if (e?.target?.value) {
                e.target.value = TextUtil.capitalizeEachWord(value);
                fnChange(e);
            }
            fnBlur(e);
        };
        return eventHandler;
    },
};
