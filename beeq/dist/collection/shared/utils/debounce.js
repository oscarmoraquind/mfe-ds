/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { isNil } from "./isNil";
import { setRafTimeout } from "./setRafTimeout";
/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed
 * since the last time the debounced function was invoked.
 *
 * @param {Function} func - The function to debounce.
 * @param {Number} wait - The number of milliseconds to delay.
 * @param {Boolean} immediate - If `true`, the function triggers immediately and then waits for the interval before being called again.
 * @return {Function} The new debounced function.
 */
export const debounce = (func, wait = 0, immediate = false) => {
    let cancel;
    function debounceHandler(...args) {
        cancel?.();
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;
        function timeoutHandler(fn, context, ...args) {
            fn.apply(context, args);
        }
        if (immediate && isNil(cancel)) {
            func.apply(context, args);
        }
        cancel = setRafTimeout(timeoutHandler, wait, func, context, ...args);
    }
    return Object.assign(debounceHandler, {
        cancel: () => {
            cancel?.();
        },
    });
};
//# sourceMappingURL=debounce.js.map
