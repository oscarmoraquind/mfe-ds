/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
/**
 * Implements setTimeout using requestAnimationFrame. Uses setTimeout if wait is 0.
 *
 * @param {Function} func - The function to timeout.
 * @param {Number} wait - The number of milliseconds to delay.
 * @param {Any[]} args - The arguments of func.
 * @returns {void}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setRafTimeout = (func, wait, ...args) => {
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
//# sourceMappingURL=setRafTimeout.js.map
