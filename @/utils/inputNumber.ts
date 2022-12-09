import get from "lodash.get";
import { ChangeEventHandler, FocusEventHandler } from "react";

import NumberUtil from "./number";

export type FnChange = ChangeEventHandler<HTMLInputElement> | undefined;
export type FnBlur = FocusEventHandler<HTMLInputElement> | undefined;

export default {
    cleanMobileOnChange: (fnChange?: FnChange) => {
        const eventHandler: FnChange = (e) => {
            if (!fnChange) {
                return;
            }
            const value = get(e, "target.value", "");
            if (e?.target?.value) {
                e.target.value = NumberUtil.cleanMobile(value);
            }
            fnChange(e);
        };
        return eventHandler;
    },
    cleanMobileNoPlusOnChange: (fnChange?: FnChange) => {
        const eventHandler: FnChange = (e) => {
            if (!fnChange) {
                return;
            }
            const value = get(e, "target.value", "");
            if (e?.target?.value) {
                e.target.value = NumberUtil.cleanMobileNoPlus(value);
            }
            fnChange(e);
        };
        return eventHandler;
    },
    cleanOtpOnChange: (fnChange?: FnChange) => {
        const eventHandler: FnChange = (e) => {
            if (!fnChange) {
                return;
            }
            const value = get(e, "target.value", "");
            if (e?.target?.value) {
                e.target.value = NumberUtil.cleanOtp(value);
            }
            fnChange(e);
        };
        return eventHandler;
    },
    cleanFloatOnChange: (fnChange?: FnChange) => {
        const eventHandler: FnChange = (e) => {
            if (!fnChange) {
                return;
            }
            const value = get(e, "target.value", "");
            if (e?.target?.value) {
                e.target.value = NumberUtil.cleanFloat(value);
            }
            fnChange(e);
        };
        return eventHandler;
    },
    cleanIntegerOnChange: (fnChange?: FnChange) => {
        const eventHandler: FnChange = (e) => {
            if (!fnChange) {
                return;
            }
            const value = get(e, "target.value", "");
            if (e?.target?.value) {
                e.target.value = NumberUtil.cleanInteger(value);
            }
            fnChange(e);
        };
        return eventHandler;
    },

    //

    cleanMobileOnBlur: (fnChange: FnChange, fnBlur: FnBlur, value?: string) => {
        const eventHandler: FnBlur = (e) => {
            if (!fnBlur || !fnChange) {
                return;
            }
            if (e?.target?.value) {
                e.target.value = NumberUtil.cleanMobile(value);
                fnChange(e);
            }
            fnBlur(e);
        };
        return eventHandler;
    },
    cleanMobileNoPlusOnBlur: (fnChange: FnChange, fnBlur: FnBlur, value?: string) => {
        const eventHandler: FnBlur = (e) => {
            if (!fnBlur || !fnChange) {
                return;
            }
            if (e?.target?.value) {
                e.target.value = NumberUtil.cleanMobileNoPlus(value);
                fnChange(e);
            }
            fnBlur(e);
        };
        return eventHandler;
    },
    cleanOtpOnBlur: (fnChange: FnChange, fnBlur: FnBlur, value?: string) => {
        const eventHandler: FnBlur = (e) => {
            if (!fnBlur || !fnChange) {
                return;
            }
            if (e?.target?.value) {
                e.target.value = NumberUtil.cleanOtp(value);
                fnChange(e);
            }
            fnBlur(e);
        };
        return eventHandler;
    },
    cleanFloatOnBlur: (fnChange: FnChange, fnBlur: FnBlur, value?: string) => {
        const eventHandler: FnBlur = (e) => {
            if (!fnBlur || !fnChange) {
                return;
            }
            if (e?.target?.value) {
                e.target.value = NumberUtil.cleanFloat(value);
                fnChange(e);
            }
            fnBlur(e);
        };
        return eventHandler;
    },
    cleanIntegerOnBlur: (fnChange: FnChange, fnBlur: FnBlur, value?: string) => {
        const eventHandler: FnBlur = (e) => {
            if (!fnBlur || !fnChange) {
                return;
            }
            if (e?.target?.value) {
                e.target.value = NumberUtil.cleanInteger(value);
                fnChange(e);
            }
            fnBlur(e);
        };
        return eventHandler;
    },
};
