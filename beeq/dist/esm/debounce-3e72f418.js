/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { i as isNil } from './isNil-2290f64e.js';

/**
 * Implements setTimeout using requestAnimationFrame. Uses setTimeout if wait is 0.
 *
 * @param {Function} func - The function to timeout.
 * @param {Number} wait - The number of milliseconds to delay.
 * @param {Any[]} args - The arguments of func.
 * @returns {void}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setRafTimeout = (func, wait, ...args) => {
    const invokeFunc = () => func(...args);
    if (wait === 0) {
        const timeoutId = setTimeout(invokeFunc, wait);
        return () => clearTimeout(timeoutId);
    }
    else {
        let rafId;
        const currentTime = performance.now();
        const cancel = () => cancelAnimationFrame(rafId);
        const handleRequestAnimationFrame = (time) => {
            const delta = time - currentTime;
            cancel();
            if (delta < wait) {
                rafId = requestAnimationFrame(handleRequestAnimationFrame);
            }
            else {
                invokeFunc();
            }
        };
        rafId = requestAnimationFrame(handleRequestAnimationFrame);
        return cancel;
    }
};

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed
 * since the last time the debounced function was invoked.
 *
 * @param {Function} func - The function to debounce.
 * @param {Number} wait - The number of milliseconds to delay.
 * @param {Boolean} immediate - If `true`, the function triggers immediately and then waits for the interval before being called again.
 * @return {Function} The new debounced function.
 */
const debounce = (func, wait = 0, immediate = false) => {
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

export { debounce as d, setRafTimeout as s };

//# sourceMappingURL=debounce-3e72f418.js.map